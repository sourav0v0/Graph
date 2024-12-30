import React from "react";
import Graph from "./components/Graph";
import "chart.js/auto";
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import GraphHeaders from "./components/GraphHeaders";

const App = () => {
  return (
    <div>
      <Header />
      <NavTabs />

      <section className="graphContainer">
        <GraphHeaders />
        <div className="graph">
          <Graph />
        </div>
      </section>
    </div>
  );
};

export default App;
