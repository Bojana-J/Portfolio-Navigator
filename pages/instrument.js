import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from "../components/Layout";
import TableInstrument from "../components/TableInstrument";


const Instrument = () => {
  const [state, setState] = useState({
    data: ""
  });

  const router = useRouter();
  const {id} = router.query;
  console.log('this is', id);
  

  const fetchData = async id => {
    const jwt = localStorage.getItem("token");
    const { data } = await axios.get(
      `https://beta.stockzoom.com/api/v1/instruments/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
    );
    setState({
      data
    });
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <Layout>
      <div>
        <h2>
          Instrument with the id:
          <br />
          <span>{state.data.id}</span>
        </h2>
        <div>
          <TableInstrument data={state.data} />
        </div>
       
      </div>
    </Layout>
  );
};

export default Instrument;
