// import { useParams} from 'react';
// import { useRouter } from 'next/router';
import axios from "axios";
import Layout from "../components/Layout";

class Detail extends React.Component {
  state = {
    detail: [],
    position: []
  };

  handleClick = async () => {
    console.log("clicked");

    const jwt = localStorage.getItem("token");
    const { data } = await axios.get(
      "https://beta.stockzoom.com/api/v1/me/portfolios/",
      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
    );
    const { results } = data;
    console.log("res", results);

    // const alias = "1d16a367-6a94-4304-bbd8-cb04b1f2d9a9";
    const alias = "4fc39142-6618-4075-95d4-c69cf0f6ed73";

    const obj = results.filter(el => el.alias === alias);
    const detail = obj[0];
    console.log("det", detail);
    this.setState({ detail });

    const position = detail.positions;
    console.log("pos", position);
    this.setState({ position });
  };

  handleSwitch = () => {
    console.log("clicked");
  };

  render() {
    const { detail } = this.state;
    const { position } = this.state;

    return (
      <Layout>
        <div>
          <button onClick={this.handleClick}>get more details</button>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Key</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Name</td>
                <td>{detail.name}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Account</td>
                <td>{detail.account_number}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Provider</td>
                <td>{detail.provider}</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Currency</td>
                <td>{detail.currency}</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Positions</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div>
            <p>Show all positions</p>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  {position.map((position, index) => (
                    <th>
                      <td>{Object.keys(position)[index]}</td>
                    </th>
                  ))}

                  {/* <th scope="col">#</th>
                <th scope="col">1a</th> */}
                </tr>
              </thead>
              <tbody>
                {position.map((position, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{position.instrument.id}</td>
                    <td>{position.instrument.rating}</td>
                    <td>{position.instrument.identifier}</td>
                    <td>{position.instrument.name}</td>
                    <td>{position.instrument.currency}</td>
                    <td>{position.instrument.country}</td>
                    <td>{position.instrument.symbol}</td>
                    <td>{position.acquisition_price}</td>
                    <td>{position.allocation}</td>
                    <td>{position.kind}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <p>Filter by Acquisition Price</p>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">part </th>
                  <th scope="col">2</th>
                </tr>
              </thead>
              <tbody>
                {position.map((position, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{Object.keys(position)[1]}</td>
                    <td>{position.acquisition_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="anc">
            <p>Filter by Allocation</p>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">part </th>
                  <th scope="col">3</th>
                </tr>
              </thead>
              <tbody>
                {position.map((position, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{Object.keys(position)[2]}</td>
                    <td>{position.allocation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/*///// */}
        </div>
      </Layout>
    );
  }
}

export default Detail;
