import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Right.css";


class Right extends Component {
    render() {
      return (
        <section className="right div3">
            <div className="up">
                <button className="up_btn">My Profile</button>
                <button className="up_btn">Log Out</button>
            </div>
            <div className="down">
                <button className="btn1">Become a tutor</button>
                <button className="btn2">Saved announcements </button>
                <button className="btn3">Recieved Messages</button>
                <button className="btn4">My announcements</button>
            </div>
        </section>
      );
    }
  }
  
  export default Right;