import React, { Component } from "react";
import Cook from "../scss/img/cook.jpg";
import "../scss/css/styles.css";

export default class Index extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: `url(${Cook})`, width: '100%', height: 500 }} id="topImg">
  <div className="container">
    <div className="row">
      <div className="col-md-4" style={{fontWeight: 700, paddingTop: '10%'}}>
        <p style={{borderRadius: 50, fontSize: 'large'}} target="_blank" href="/">
          </p>
        <small className="text" style={{fontSize: 'large'}} />
      </div>
      <div className="col-md-8">
        <div style={{float: 'right', marginTop: '10%', marginRight: '10%', fontWeight: 'bolder'}}>
          <a style={{borderRadius: '50%', borderWidth: 2, color: 'white', backgroundColor: 'black'}} className="btn btn-outline-dark" href="/">Likes</a>
          <a style={{borderRadius: '50%', borderWidth: 2, color: 'white', backgroundColor: 'black'}} className="btn btn-outline-dark" href="/">Delivery</a>
        </div>
        <div className="title" style={{fontSize: 'x-large', paddingTop: '40%', color: 'white'}}>
          <cite style={{fontWeight: 'bold'}}>We Provide all foods at affordable prices..</cite>
          <h2 style={{fontStyle: 'italic', color: 'white'}}>By<strong> Ruiru limited </strong> From
            Nairobi,Kenya</h2>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}
