import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import TableInstrument from "../components/TableInstrument";
import { apiService } from "../services/apiService";

const Instrument = () => {
  const [state, setState] = useState({
    data: ""
  });

  const router = useRouter();
  const { id } = router.query;

  const fetchData = async id => {
    const data = await apiService.getInstrument(id);
    setState({ data });
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
      </div>
    </Layout>
  );
};

export default Instrument;
