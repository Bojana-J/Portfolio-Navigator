import React from "react";
import { Line } from "react-chartjs-2";

const MultiLineChart = props => {
  const colors = [
    "#78C2AD",
    "#F3969A",
    "#6CC3D5",
    "#FFCE67",
    "#FF7851",
    "#D9DDDC",
    "#E4A0F7",
    "#fff857"
  ];

  const datasets = [];
  let i;
  for (i = 0; i < props.allYields.length; i++) {
    datasets.push({
      label: `id ${props.ids[i]}`,
      fill: false,
      backgroundColor: colors[i],
      borderColor: colors[i],
      data: props.allYields[i]
    });
  }

  const data = {
    labels: props.labels,
    datasets: datasets
  };

  const options = {
    title: {
      display: true,
      text: "Yield of Instruments",
      fontSize: 26
    },
    responsive: true,
    legend: {
      position: "right"
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Time",
            fontSize: 16,
            padding: 10
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Value",
            fontSize: 16,
            padding: 10
          }
        }
      ]
    }
  };

  return (
    <div className="canvas">
      <Line data={data} options={options} />
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

export default MultiLineChart;
