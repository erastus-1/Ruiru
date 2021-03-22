import React from 'react'
import "../scss/css/styles.css";
// import { Card, Image } from 'semantic-ui-react'

const CardImageCard = () => (
  <div class="container" style={{marginBottom: 20,}}>
    <h1 style={{fontWeight: "bold", textAlign: "center"}}>Select your Food From the Following Categories.</h1>
    <div class="row">
        <div class="details">
            <br />
            <div class="col-md-3">
                <div class="card card-1">
                    <a href="/">
                        <h4>
                        <button class="btn btn-default"
                            style={{width: "11rem", fontWeight: "bolder", fontSize: 11}}>Snack Bar</button>
                            </h4>
                    </a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-2">
                    <a href="/">
                        <h4>
                        <button class="btn btn-default" style={{width: "11rem",fontWeight: "bolder",fontSize: "10px"}}>Main
                            Meals</button>
                            </h4>
                    </a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-3">
                    <a href="/">
                        <h4>
                        <button class="btn btn-default"
                            style={{width: "11rem", fontWeight: "bolder", fontSize: "11px"}}>Salad Haven</button>
                            </h4>
                    </a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-4">
                    <a href="/">
                        <h4>
                        <button class="btn btn-default" style={{width: "11rem", fontWeight: "bolder", fontSize: "11px"}}>All
                            Meals</button>
                            </h4>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>


)

export default CardImageCard