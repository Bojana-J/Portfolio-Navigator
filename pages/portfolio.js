import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout";

class Portfolio extends React.Component {
  state = {
    portfolio: []
  };

  async componentDidMount() {
    /////// DESTRUCTURE URL LINK
    const jwt = localStorage.getItem("token");
    const { data } = await axios.get(
      "https://beta.stockzoom.com/api/v1/me/portfolios/",
      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
    );

    const { results: portfolio } = data;
    this.setState({ portfolio });

    const obj1 = portfolio[0];
    console.log(obj1);
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
              {this.state.portfolio.map(result => (
                <tr key={result.alias}>
                  <th>{result.name}</th>
                  <th>{result.account_number}</th>
                  <th>
                    <Link href={`/detail?alias=${result.alias}`}>
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

export default Portfolio;
