import React, { Component } from "react";
import "./Footer.css";
import phone from "./resources/images/phone.png";
import location from "./resources/images/location.png";
import message from "./resources/images/message.png";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <section className="information">
          <section className="footer_section">
            <h5 className="titles">Company Info</h5>
            <Link to="/About-us" >
              <text className="footer_link">About Us</text>
            </Link>
          </section>
          <section className="footer_section">
            <h5 className="titles">Resources</h5>
            <Link to="https://www.figma.com/fr/">
              <text className="footer_link">Figma</text>
            </Link>
            <Link to="https://github.com/">
              <text className="footer_link">Github</text>
            </Link>
            <Link to="https://fr.reactjs.org/">
              <text className="footer_link">React</text>
            </Link>
            <Link to="https://www.python.org/">
              <text className="footer_link">Python</text>
            </Link>
          </section>
          <section className="footer_section">
            <h5 className="titles">Get In Touch</h5>
            <div className="infos">
              <img src={phone} alt="phone" className="imgs"></img>
              <h6 className="img_text">(480) 555-0103</h6>
            </div>
            <div className="infos">
              <img src={location} alt="location" className="imgs"></img>
              <h6 className="img_text">
                4517 Washington Ave. Manchester, Kentucky 39495
              </h6>
            </div>
            <div className="infos">
              <img src={message} alt="email" className="imgs"></img>
              <h6 className="img_text">name@example.com</h6>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default Footer;
