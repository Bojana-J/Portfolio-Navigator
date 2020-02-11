import React from "react";
import { Bar } from "react-chartjs-2";

const MainChart = props => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Acquisition price",
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
        data: props.prices
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: "Acquisition prices of Instruments",
      fontSize: 26
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
            labelString: "Price in thousands (000)",
            fontSize: 16,
            padding: 10
          }
        }
      ]
    }
  };
  return (
    <div className="canvas">
      <Bar data={data} options={options} />
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

export default MainChart;
