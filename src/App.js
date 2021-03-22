import './App.css';
import React, { Component } from "react";
import Home from "./components/Home";
import Index from "./components/Index";
import Index from "./components/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
      <Index />
      <Landing />
      </div>
    );
  }
}

export default App;
