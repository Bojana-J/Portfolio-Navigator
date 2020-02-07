import Link from "next/link";
import Layout from "../components/Layout";
import { apiService } from "../services/apiService";

class Portfolios extends React.Component {
  state = {
    portfolios: []
  };

  async componentDidMount() {
    const data = await apiService.fetchPortfolios();
    this.setState({ portfolios: data.results });
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Portfolios</h1>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Account</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.portfolios.map(result => (
                <tr key={result.alias}>
                  <th>{result.name}</th>
                  <th>{result.account_number}</th>
                  <th>
                    <Link href={`/portfolio?alias=${result.alias}`}>
                      <a>Click here for more Details</a>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}

export default Portfolios;
