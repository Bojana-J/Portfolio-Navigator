import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { authService } from "../services/authService";

//   warren.buffet@willandskill.se
//   berkshirehathaway2018

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
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <Head>
          <title>WillandSkill</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/minty/bootstrap.min.css"
          />
        </Head>

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
    );
  }
}

export default Index;
