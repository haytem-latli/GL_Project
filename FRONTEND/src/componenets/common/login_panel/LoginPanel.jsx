import React, { Component } from "react";
import "./LoginPanel.css";
import kid from "./resources/image/kid.png";
import logo from "./resources/image/logo.png";
import google from "./resources/image/google.png";
import { Link } from "react-router-dom";
class LoginPanel extends Component {
  render() {
    return (
      <section className="LoginPanel">
        <section className="rightSection">
          <Link to="/" className="displayprob">
            <img src={logo} alt="logo" className="secondaryLogo"></img>
          </Link>
          <text className="secondarytext">Let's get started</text>
          <Link to="/feed" className="secondarybtn">
            <img src={google} alt=" google"></img>
            <taxt className="btnText">Continue with Google</taxt>
          </Link>
        </section>
        <section className="leftSection">
          <img src={kid} alt="kid" className="kidImg"></img>
        </section>
      </section>
    );
  }
}

export default LoginPanel;
