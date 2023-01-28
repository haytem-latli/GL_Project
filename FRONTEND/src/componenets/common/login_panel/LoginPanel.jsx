import React, { Component } from "react";
import "./LoginPanel.css";
import kid from "./resources/image/kid.png";
import logo from "./resources/image/logo.png";
import google from "./resources/image/google.png";
import { Link } from "react-router-dom";
import GLogin from "react-google-login";
import googleLogin  from "../../../axios/google";



class LoginPanel extends Component {
  render() {
    return (
      <section className="LoginPanel">
        <section className="rightSection">
          <Link to="/" className="displayprob">
            <img src={logo} alt="logo" className="secondaryLogo"></img>
          </Link>
          <p className="secondarytext">Let's get started</p>
          <Link to="/feed" className="secondarybtn">
            <img src={google} alt=" google"></img>
            <p className="btnText">Continue with Google</p>
          </Link>

{/* //le button cnx GOOGLE */}

          <GLogin
            clientId="337478785513-l4oi4ep9vir1rre9vhauac2fikdsnk8p.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={(response) => googleLogin(response)}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                type="button"
                class="login-with-google-btn"
              >
                Sign in with Google
              </button>
            )}
          />




        </section>
        <section className="leftSection">
          <img src={kid} alt="kid" className="kidImg"></img>
        </section>
      </section>
    );
  }
}

export default LoginPanel;
