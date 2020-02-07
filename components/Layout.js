import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>WillandSkill</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/minty/bootstrap.min.css"
          //   href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/spacelab/bootstrap.min.css"
        />
      </Head>
      {/* <style jsx>
        {`
          .body {
            padding-left: 10%;
          }
        `}
      </style> */}

      {props.children}
    </div>
  );
};

export default Layout;
