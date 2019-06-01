import React from "react";
import { Counter } from "../components/counter";
import Head from "../components/head";
import Nav from "../components/nav";

function Home() {
  return (
    <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
      <Head title="Home" />
      <Nav />
      <h1>Live Click Count</h1>
      <p>
        This Counter will update immediately when the button is clicked, even if
        it's clicked by another user.
      </p>
      <Counter />
    </div>
  );
}

export default Home;
