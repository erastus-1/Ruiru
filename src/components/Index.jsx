import React, { Component } from "react";
import Ck1 from "../scss/img/ck1.jpg";
import Shop from "../scss/img/shop.jpg";
import En from "../scss/img/en.jpg";
import Deliver from "../scss/img/deliver.png";
import "../scss/css/styles.css";

export default class Sidebar extends Component {
  render() {
    return (

      <div className="container" style={{fontweight: "bold", paddingtop: "50px"}}>
      <div className="row">
        <div className="col-md-3">
          <img style={{height: "200px", width:"200px"}} src={Ck1} alt="" />
          <h3 className style={{marginleft:"50px", fontweight: "bold"}}>WE COOK</h3>
        </div>
        <div className="col-md-3">
          <img style={{height:"200px", width: "200px"}} src={Shop} alt="" />
          <h3 className style={{marginleft:"20px", fontweight: "bold"}}>YOU ORDER</h3>
        </div>
        <div className="col-md-3">
          <img style={{height:"200px", width: "200px"}} src={Deliver} alt="delivery" />
          <h3 className style={{marginleft:"50px", fontweight: "bold"}}>WE DELIVER</h3>
        </div>
        <div className="col-md-3">
          <img style={{height:"200px", width: "200px"}} src={En} alt="" />
          <h3 className style={{marginleft:"50px", fontweight: "bold"}}>YOU ENJOY</h3>
        </div>
      </div>
    </div>
    
    )
  }
}