class MainChart extends React.Component {
  constructor(props) {
    super(props);
    this.myChart = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data && this.props.data != prevProps.data) {
      const { positions } = this.props.data;
      const prices = this.getPricesArray(positions);
      const labels = this.getLabelsArray(positions);
      this.createChart(labels, prices);
    }
  }

  getPricesArray = positions => {
    const prices = [];
    if (positions) {
      positions.forEach(function(object) {
        prices.push(object.acquisition_price);
      });
    }
    return prices;
  };

  getLabelsArray = positions => {
    const labels = [];
    if (positions) {
      positions.forEach(function(object) {
        labels.push(object.instrument.id);
      });
    }
    return labels;
  };

  createChart = (labels, prices) => {
    let ctx = this.myChart.current;
    let chart = new Chart(ctx, {
      type: "bar",

      data: {
        labels: labels,
        datasets: [
          {
            label: "Acquisition price",
            data: prices,
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
            borderColor: "#000",
            hoverBorderWidth: 2,
            hoverBorderColor: "#777"
          }
        ]
      },

      options: {
          title: {
              display: true,
              text: "Acquisition prices of Instruments",
              fontSize: 22,
          },
        //   legend: {
        //     position: 'right'
        //   },
          scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Instrument by Id',
                    fontSize: 16,
                    padding: 10,
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Price in thousands (000)',
                    fontSize: 16,
                    padding: 10,
                }
            }],
        }
      }
    });
  };

  render() {
    return (
      <div>
        <div className="canvas">
          <canvas ref={this.myChart} id="myChart"></canvas>
        </div>
        <style jsx>
          {`
            .canvas {
              margin: 5% 15%;
              text-align: center;
            }
          `}
        </style>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
      </div>
    );
  }
}
export default MainChart;
