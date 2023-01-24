import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  render() {
    return (
      <section className="card">
        <img
          src={this.props.image}
          alt="profile_img"
          className="card_img"
        ></img>
        <section className="cardinfo">
          <h5 className="card_title">{this.props.title}</h5>
          <hr className="card_line" color="#252b42" width="30%" />
          <p className="card_text">{this.props.text}</p>
        </section>
      </section>
    );
  }
}

export default Card;
