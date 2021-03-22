import React, { Component } from "react";
import Sa1 from "../scss/img/sa1.jpg";
import S1 from "../scss/img/s1.jpg";
import C1 from "../scss/img/c1.jpg";
import F1 from "../scss/img/f1.jpg";
import Be1 from "../scss/img/be1.jpg";
import B1 from "../scss/img/b1.jpg";
import bla1 from "../scss/img/bla1.jpg";
import Cookie from "../scss/img/cookie.jpeg";
import P1 from "../scss/img/p1.jpg";
import "../scss/css/styles.css";

export default class Landing extends Component {
    render() {
      return (

        <div className="container" style={{ paddingBottom:"50px" }}>   
        <h1 style={{fontWeight: "bold", textAlign: "center" }}>
  Products
</h1>
  
        <div className="row">
  <div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={C1} alt="" style={{ height: "200px", width: "350px" }}  />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>
<div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={F1} alt="" style={{ height: "200px", width: "350px" }} />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>

  <div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={Be1} alt="" style={{ height: "200px", width: "350px" }} />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>

  <div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={Cookie} alt="" style={{ height: "200px", width: "350px" }} />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>

  <div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={B1} alt="" style={{ height: "200px", width: "350px" }} />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>

  <div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={bla1} alt="" style={{ height: "200px", width: "350px" }} />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>
  <div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={Sa1} alt="" style={{ height: "200px", width: "350px" }} />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>

  <div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={P1} alt="" style={{ height: "200px", width: "350px" }} />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>

  <div className="col-lg-4" style={{ paddingTop:"10px" }}>
    <img className="thumbnail" src={S1} alt="" style={{ height: "200px", width: "350px" }} />
    <div className="box-element product" style={{height: 70}}>
      <h6><strong>Cookies</strong></h6>
      <p>best snacks in town</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-outline-secondary add-btn">Make Purchase</button>
      <h4 style={{display: 'inline-block', float: 'right', color: 'blue'}}><strong>$100</strong></h4>
    </div>
  </div>

</div>
</div>


        );
                }
            }