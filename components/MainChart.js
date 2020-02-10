import React from "react";
import { Bar } from "react-chartjs-2";

class Chart extends React.Component {
  state = {
    data: {
      labels: [18151, 125731, 125733, 18994, 42677, 18133, 17344, 75724],
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
          data: [185.333, 28.634, 28.956, 55, 22.586, 174.417, 13.195, 272.519]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Acquisition prices of Instruments",
        fontSize: 22
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
    }
  };

  render() {
    console.log("a", this.state.data.labels);
    return (
      <div className="canvas">
        <Bar data={this.state.data} options={this.state.options} />
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
  }
}

export default Chart;
