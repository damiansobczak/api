import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="indigo darken-2">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            API Test
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/cart" className="nav-cart">
                <i className="material-icons">shopping_cart</i>Cart
              </a>
            </li>
            {console.log(this.props.favorite)}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
