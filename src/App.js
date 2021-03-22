import React, { Component } from "react";
import Home from "./components/Home";
import Index from "./components/Index";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
      <Index />
      <Products />
      <Landing />
      <Footer />
      </div>
    );
  }
}

export default App;
