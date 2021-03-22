import React from 'react';
import "../scss/css/styles.css";

class Navbar extends React.Component {
    render() {
      return (
        <nav className="navbar-transition cool-navbar z-depth-0">
          <div className="nav-wrapper center" id="nav">
            <ul className="nav-mobile right hide-on-med-and-down">
              <li><a id="nav-text" href="/#/">Home</a></li>
              <li><a href="/#/">About</a></li>
            </ul>
          </div>
        </nav>
      )
    }
  }
  
  export default Navbar;