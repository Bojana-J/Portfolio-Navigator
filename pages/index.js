import Router from "next/router";
import fetch from "isomorphic-unfetch";
import { authService } from "../services/authService";
import Layout from "../components/Layout";

//   warren.buffet@willandskill.se
//   berkshirehathaway2018
//   1d16a367-6a94-4304-bbd8-cb04b1f2d9a9

class Index extends React.Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state.account;
    const data = await authService.login(email, password);
    const jwt = await data.token;
    localStorage.setItem("token", jwt);
    Router.push("/portfolio/");
  };

  render() {
    const { account } = this.state;

    return (
      <Layout>
        <div>
          <h1>
            Welcome to <br /> Will&Skill
          </h1>

          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  value={account.email}
                  onChange={this.handleChange}
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={account.password}
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
