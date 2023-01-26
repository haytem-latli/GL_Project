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
              <text className="navbar_item">Home</text>
            </Link>
            <Link to="/About-Us" className="navbar_item2">
              <text className="navbar_item">About Us</text>
            </Link>
            <Link to="/Contact-Us" className="navbar_item3">
              <text className="navbar_item">Contact Us</text>
            </Link>
        </section>
      </section>
    );
  }
}

export default Navbar;
