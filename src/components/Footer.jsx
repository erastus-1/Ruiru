import React, { Component } from "react";
import "../scss/css/styles.css";

export default class Footer extends Component {
  render() {
    return (
      <div
        class="container text-center text-md-left"
        style={{ color: "black", backgroundColor: "wheat" }}
      >
        <div class="row">
          <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
            <h5
              class="font-weight-bold text-uppercase mb-4"
              style={{ color: "blue" }}
            >
              ABOUT US
            </h5>
            <p>
              We ensure you get your food conviniently and provide you with
              efficient pocket friendly prices.
            </p>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5
              class="font-weight-bold text-uppercase mb-4"
              style={{ color: "blue" }}
            >
              Why US
            </h5>
            <p>
              We ensure you get your food at the set time and provide a free
              delivery to clients within Nairobi
            </p>
          </div>
          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5
              class="font-weight-bold text-uppercase mb-4"
              style={{ color: "blue" }}
            >
              CONTACT US
            </h5>

            <ul class="list-unstyled">
              <li>
                <p>
                  <i class="fas fa-envelope mr-3"></i> foodie@gmail.com
                </p>
              </li>

              <li>
                <p>
                  <i class="fas fa-phone mr-3"></i> +25477000000
                </p>
              </li>
            </ul>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
            <h5
              class="font-weight-bold text-uppercase mb-4"
              style={{ color: "blue" }}
            >
              FOLLOW US
            </h5>
            <button
              type="button"
              style={{ paddingRight: "15px" }}
              class="btn-floating btn-fb"
            >
              <i class="fab fa-facebook-f"></i>
            </button>
            <button
              type="button"
              style={{ paddingRight: "15px" }}
              class="btn-floating btn-tw"
            >
              <i class="fab fa-twitter"></i>
            </button>
            <button
              type="button"
              style={{ paddingRight: "15px" }}
              class="btn-floating btn-gplus"
            >
              <i class="fab fa-google-plus-g"></i>"
            </button>
            <button
              type="button"
              style={{ paddingRight: "5px" }}
              class="btn-floating btn-dribbble"
            >
              <i class="fab fa-dribbble"></i>
            </button>
          </div>
        </div>
        <div
          class="footer-copyright text-center py-3"
          style={{ color: "black" }}
        >
          <p>© 2021 Copyright: </p>
          <p> Ruiru ltd</p>
        </div>
      </div>
    );
  }
}
