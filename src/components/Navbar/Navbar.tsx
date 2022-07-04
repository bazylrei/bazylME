import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FaReact, FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link, HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Home/HomePage";
import SubPage from "../SubPage/SubPage";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <Router>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ME</h1>
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
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/React' element={<SubPage title="React"/>}/>
        <Route path='/Web3' element={<SubPage title="Web3"/>}/>
        <Route path='/Books' element={<SubPage title="Books"/>}/>
      </Routes>
      </Router>
    );
  }
}

export default Navbar;
