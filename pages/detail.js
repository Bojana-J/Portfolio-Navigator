import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from "../components/Layout";
import TableDetail from "../components/TableDetail";
import TablePosition from "../components/TablePosition";

const Detail = () => {
  const [state, setState] = useState({
    data: ""
  });

  const router = useRouter();
  const { alias } = router.query;

  const fetchData = async alias => {
    const jwt = localStorage.getItem("token");
    const { data } = await axios.get(
      `https://beta.stockzoom.com/api/v1/me/portfolios/${alias}/`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
    );
    console.log('data', data)
    setState({
      data
    });
  };


  useEffect(() => {
    if (alias) {
      fetchData(alias);
    }
  }, [alias]);

  return (
    <Layout>
      <div>
        <h2>
          Details of portfolio for a user with alias:
          <br />
          <span>{router.query.alias}</span>
        </h2>
        <div>
          <TableDetail data={state.data} />
        </div>
        <div id="positions" >
            <h2>List of Positions</h2>
          <TablePosition data={state.data}/> 
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
