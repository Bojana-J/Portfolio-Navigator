import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>WillandSkill</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/minty/bootstrap.min.css"
        />
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
