import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FaReact, FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ME</h1>
        <FaReact className="fa-react" />
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;