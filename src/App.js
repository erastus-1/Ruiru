import React, { Component } from "react";
import Home from "./components/Home";
import Index from "./components/Index";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
      <Index />
      <Landing />
      <Footer />
      </div>
    );
  }
}

export default App;
