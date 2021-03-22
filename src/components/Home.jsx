import React from "react";
import Navbar from "./Navbar";
import Index from "./Index";

const Home = () => (
  <div id="background">
    <div className="navigation">
      <Navbar />
    </div>
    <div className="mainContainer">
      <Index /> 
      </div>
  </div>
);
export default Home;
