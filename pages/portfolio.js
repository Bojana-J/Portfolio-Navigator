import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiService } from "../services/apiService";
import Layout from "../components/Layout";
import TableDetail from "../components/TableDetail";
import TablePosition from "../components/TablePosition";
import MainChart from "../charts/MainChart";
import PortfolioPie from "../charts/PortfolioPie";
import MultiLineChart from "../charts/MultiLineChart";

const Portfolio = () => {
  const [state, setState] = useState({
    data: "",
    prices: "",
    labels: "",
    allocations: "",
    allYields: "",
    allLabels: ""
  });

  const router = useRouter();
  const { alias } = router.query;

  const fetchData = async alias => {
    const data = await apiService.getPortfolio(alias);
    const { positions } = data;
    const prices = [],
      labels = [],
      allocations = [],
      allYields = [];
    let allLabels = [];

    positions.forEach(function(position) {
      prices.push(position.acquisition_price);
      labels.push(position.instrument.id);
      allocations.push(position.allocation);
      const valuesArray = Object.values(position.instrument);
      allYields.push(valuesArray.slice(9, 22));
    });

    if (positions.length > 0) {
      const instrument = positions[0].instrument;
      const keysArray = Object.keys(instrument);
      allLabels = keysArray.filter(el => el.includes("yield"));
    }

    setState({ data, prices, labels, allocations, allYields, allLabels });
  };

  useEffect(() => {
    if (alias) {
      fetchData(alias);
    }
  }, [alias]);

  const { positions } = state.data;

  return (
    <Layout>
      <div className="container">
        <h2 className="mx-2 my-3">Portfolio Details</h2>
        <div className="mb-5">
          <TableDetail data={state.data} />
        </div>
        {positions && positions.length > 0 && (
          <div id="positions">
            <h2 className="mx-2 my-3">List of Positions</h2>
            <TablePosition data={state.data} />
          </div>
        )}
      </div>
      {positions && positions.length > 0 && (
        <div>
          <MainChart prices={state.prices} labels={state.labels}></MainChart>
          <PortfolioPie allocations={state.allocations} labels={state.labels} />
          <MultiLineChart
            ids={state.labels}
            labels={state.allLabels}
            allYields={state.allYields}
          />
        </div>
      )}
    </Layout>
  );
};

export default Portfolio;
