import React, { Component } from "react";
import Card from "./card";
import "./Layout1.css";
import img1 from "./card/resources/images/img1.png";
import img2 from "./card/resources/images/img2.png";
import img3 from "./card/resources/images/img3.png";
class Layout1 extends Component {
  render() {
    return (
      <section className="main_container">
        <section className="WhatIs_panel">
          <hr color="#38C6BD" size="6" className="line2" />
          <h2>What is </h2>
          <h2>CELERITER DOCTORINA</h2>
          <p>
            On our site, you have the possibility to approach our best teachers
            in order to help you work and study in the most optimal conditions,
            Celeriter Doctorina which means "learn quickly" is your best
            companion and tool for a bright future
          </p>
        </section>
        <section className="description_panel">
          <Card
            image={img1}
            title="Certified Teachers"
            text="Competent teachers able to help and train you in any subject and field"
          />
          <Card
            image={img2}
            title="Expert instruction"
            text="Flawless pedagogical methods to give you the best training in your field"
          />
          <Card
            image={img3}
            title="Easy Manipulation"
            text="A simple and fun way to find the right teacher for you."
          />
        </section>
      </section>
    );
  }
}

export default Layout1;
