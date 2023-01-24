import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./Middle.css";
import Post from "./post";
import photo_1 from "./resources/art.png";


class Middle extends Component {
    render() {
      return (
        <section className="middle div2">
          <h1>{this.props.title}</h1>
          <Post 
            img={photo_1} 
            avai="available" 
            type="onlin courses"
            subject="art"
            description="We focus on developing your skills in your comfort zone. It's only a keystroke away."
            sales="15"
            type_school="Primary"
            price="6.48"
            period="22"
            nbrLessons="24"
          />
        </section>
      );
    }
  }
  
  export default Middle;