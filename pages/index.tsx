import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";

function Home() {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <h1>Nextjs apollo isomorphic</h1>
    </div>
  );
}

Home.getInitialProps = async () => {
  return {};
};

export default Home;
