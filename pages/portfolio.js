import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import TableDetail from "../components/TableDetail";
import TablePosition from "../components/TablePosition";
import { apiService } from "../services/apiService";
import MainChart from "../services/chart";

const Portfolio = () => {
  const [state, setState] = useState({
    data: ""
  });

  const router = useRouter();
  const { alias } = router.query;

  const fetchData = async alias => {
    const data = await apiService.getPortfolio(alias);
    setState({ data });
  };

  useEffect(() => {
    if (alias) {
      fetchData(alias);
    }
  }, [alias]);

  return (
    <Layout>
      <div className="container">
        <h2 className="mx-2 my-3">Portfolio Details</h2>
        <div className="mb-5">
          <TableDetail data={state.data} />
        </div>
        {state.data.positions && state.data.positions.length > 0 && (
          <div id="positions">
            <h2 className="mx-2 my-3">List of Positions</h2>
            <TablePosition data={state.data} />
          </div>
        )}
      </div>
      <div>
        <div>
          <MainChart data={state.data}></MainChart>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
