import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiService } from "../services/apiService";
import Layout from "../components/Layout";
import TableInstrument from "../components/TableInstrument";
import InstrumentChart from "../charts/instrumentChart";

const Instrument = () => {
  const [state, setState] = useState({
    data: "",
    labels: "",
    yields: ""
  });

  const router = useRouter();
  const { id } = router.query;

  const fetchData = async id => {
    const data = await apiService.getInstrument(id);
    const keysArray = Object.keys(data);
    const labels = keysArray.filter(el => el.includes("yield"));
    const valuesArray = Object.values(data);
    const yields = valuesArray.slice(9, 22);

    setState({ data, labels, yields });
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <Layout>
      <div>
        <h2 className="mx-2 my-3">Instrument Details</h2>
        <div>
          <TableInstrument data={state.data} />
        </div>
        {state.yields && state.yields.filter(y => y !== null).length > 0 && (
          <div>
            <InstrumentChart yields={state.yields} labels={state.labels} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Instrument;
