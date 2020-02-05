import Head from "next/head";

class Index extends React.Component {
  state = {};

  render() {
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
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
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
