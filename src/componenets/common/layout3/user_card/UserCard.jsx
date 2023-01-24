import React, { Component } from "react";
import "./UserCard.css";
import fb_icon from "./resources/images/facebook.png";
import insta_icon from "./resources/images/instagram.png";
import twit_icon from "./resources/images/twitter.png";
import { Link } from "react-router-dom";
class UserCard extends Component {
  render() {
    return (
      <section className="User_card">
        <img
          src={this.props.profile_pic}
          alt="profile_picture"
          className="profile_pic"
        ></img>
        <h5 className="Name">{this.props.name}</h5>
        <text className="teacher">{this.props.speciality}</text>
        <section className="icon_section">
          <Link to="https://fr-fr.facebook.com/">
            <img src={fb_icon} alt="facebook"></img>
          </Link>
          <Link to="https://www.instagram.com/?hl=fr">
            <img src={insta_icon} alt="instagram"></img>
          </Link>
          <Link to="https://twitter.com/?lang=fr">
            <img src={twit_icon} alt="twitter"></img>
          </Link>
        </section>
      </section>
    );
  }
}

export default UserCard;
