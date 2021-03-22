import React, { Component } from "react";
import "../scss/css/styles.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ fontweight: "bold", paddingtop: "50px" }}
      >
        <h1>Ruiru</h1>
      </div>
    );
  }
}
