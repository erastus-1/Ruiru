import React, { Component } from "react";
import Ck1 from "../scss/img/ck1.jpg";
import Shop from "../scss/img/shop.jpg";
import En from "../scss/img/en.jpg";
import Deliver from "../scss/img/deliver.png";
import "../scss/css/styles.css";

export default class Sidebar extends Component {
    render() {
      return (

  <div class="container" id="category" style={{ marginBottom: 20 }}>
    <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
      Select your Food From the Following Categories.
    </h1>
    <div class="row">
      <div class="details">
        <br />
        <div class="col-md-3">
          <div class="card card-1">
            <a href="/">
              <h4>
                <button
                  class="btn btn-default"
                  style={{ width: "11rem", fontWeight: "bolder", fontSize: 11 }}
                >
                  Snack Bar
                </button>
              </h4>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-2">
            <a href="/">
              <h4>
                <button
                  class="btn btn-default"
                  style={{
                    width: "11rem",
                    fontWeight: "bolder",
                    fontSize: "10px",
                  }}
                >
                  Main Meals
                </button>
              </h4>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-3">
            <a href="/">
              <h4>
                <button
                  class="btn btn-default"
                  style={{
                    width: "11rem",
                    fontWeight: "bolder",
                    fontSize: "11px",
                  }}
                >
                  Salad Haven
                </button>
              </h4>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-4">
            <a href="/">
              <h4>
                <button
                  class="btn btn-default"
                  style={{
                    width: "11rem",
                    fontWeight: "bolder",
                    fontSize: "11px",
                  }}
                >
                  All Meals
                </button>
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
          <div className="col-md-3">
            <img style={{ height: "200px", width: "200px" }} src={Ck1} alt="" />
            <h3 className style={{ marginleft: "50px", fontweight: "bold" }}>
              WE COOK
            </h3>
          </div>
          <div className="col-md-3">
            <img
              style={{ height: "200px", width: "200px" }}
              src={Shop}
              alt=""
            />
            <h3 className style={{ marginleft: "20px", fontweight: "bold" }}>
              YOU ORDER
            </h3>
          </div>
          <div className="col-md-3">
            <img
              style={{ height: "200px", width: "200px" }}
              src={Deliver}
              alt="delivery"
            />
            <h3 className style={{ marginleft: "50px", fontweight: "bold" }}>
              WE DELIVER
            </h3>
          </div>
          <div className="col-md-3">
            <img style={{ height: "200px", width: "200px" }} src={En} alt="" />
            <h3 className style={{ marginleft: "50px", fontweight: "bold" }}>
              YOU ENJOY
            </h3>
          </div>
        </div>
      </div>
);
                }
            }