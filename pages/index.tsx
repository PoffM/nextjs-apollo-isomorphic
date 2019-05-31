import React from "react";
import { Counter } from "../components/counter";
import Head from "../components/head";
import Nav from "../components/nav";

function Home() {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <h1>Nextjs Apollo Isomorphic</h1>
      <Counter />
    </div>
  );
}

export default Home;
