import React, { Component } from "react";
import cover from "./resources/images/hero-cover-1.png";
import "./Header.css";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <section className="header">
        <section className="header_bottom">
          <section className="header_bottom_welcome-section">
            <h5 className="text1">Welcome</h5>
            <h1 className="text2">CELERITER DOCTRINA</h1>
            <h4 className="text3">
              We make a contact between the professor and the student
            </h4>
            <div className="buttons">
              <Link to="/login">
                <button className="login-btn">Log in</button>
              </Link>
              <Link to="/About-Us">
                <button className="about-btn">About us</button>
              </Link>
            </div>
          </section>
          <section className="header_bottom_cover">
            <img
              src={cover}
              alt="cover"
              className="header_bottom_cover-image"
            ></img>
          </section>
        </section>
        <hr color="#38C6BD" size="10" className="lne" />
      </section>
    );
  }
}

export default Header;
