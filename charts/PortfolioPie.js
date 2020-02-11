import React from "react";
import { Pie } from "react-chartjs-2";

const PortfolioPie = props => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Allocation",
        backgroundColor: [
          "#78C2AD",
          "#F3969A",
          "#6CC3D5",
          "#FFCE67",
          "#FF7851",
          "#D9DDDC",
          "#E4A0F7",
          "#fff857"
        ],
        hoverBorderWidth: 2,
        hoverBorderColor: "#888",
        data: props.allocations
      }
    ]
  };

  const options = {
    responsive: true,
    legend: {
      position: "right",
      labels: {
        boxWidth: 60
      }
    },
    title: {
      display: true,
      text: "Allocations of Instruments",
      fontSize: 26,
      padding: 20
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Instrument by Id",
            fontSize: 16,
            padding: 10
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Allocation",
            fontSize: 16,
            padding: 10
          }
        }
      ]
    }
  };
  return (
    <div className="canvas">
      <Pie data={data} options={options} />
      <style jsx>
        {`
          .canvas {
            margin: 5% 10%;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default PortfolioPie;
