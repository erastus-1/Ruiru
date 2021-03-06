import React from "react";
import "../scss/css/styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-white border border-2 border-green rounded-2 fixed-top"
        style={{ backgroundColor: "aqua" }}
      >
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="/"
                style={{ color: "black", fontSize: "large", fontWeight: 400 }}
              >
                <i
                  className="fa fa-home"
                  style={{ fontSize: 38, color: "rgb(36, 214, 45)" }}
                />{" "}
                HOME
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav navbar-right">
              <hr />
              <li>
                <a
                  href="#Footer"
                  style={{ color: "black", fontSize: "large", fontWeight: 400 }}
                >
                  <i
                    className="fas fa-envelope"
                    style={{ fontSize: 38, color: "rgb(36, 214, 45)" }}
                  />{" "}
                  Contact us
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="#Products"
                  style={{ color: "black", fontSize: "large", fontWeight: 400 }}
                >
                  <i
                    className="fas fa-shopping-cart"
                    style={{ fontSize: 38, color: "rgb(36, 214, 45)" }}
                  />{" "}
                  Products
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="#Category"
                  style={{ color: "black", fontSize: "large", fontWeight: 400 }}
                >
                  <i
                    className="fas fa-user"
                    style={{ fontSize: 38, color: "rgb(36, 214, 45)" }}
                  />{" "}
                  About Us
                </a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
