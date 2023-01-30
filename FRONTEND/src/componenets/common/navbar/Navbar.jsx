import React, { Component } from "react";
import logo from "./resources/images/logo.png";
import SlideBar from "../slidebar";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <section className="navbar">
        <Link to="/" className="header_logo">
          <img src={logo} alt="Logo" className="logo"></img>
        </Link>
        <section className="SlideBar">
          <SlideBar />
        </section>
        <section className="links">
            <Link to="/" className="navbar_item1">
              <p className="navbar_item">Home</p>
            </Link>
            <Link to="/About-Us" className="navbar_item2">
              <p className="navbar_item">About Us</p>
            </Link>
            <Link to="/Contact-Us" className="navbar_item3">
              <p className="navbar_item">Contact Us</p>
            </Link>
        </section>
      </section>
    );
  }
}

export default Navbar;
