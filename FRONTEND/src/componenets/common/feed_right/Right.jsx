import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Right.css";


class Right extends Component {
    render() {
      return (
        <section className="right div3">
            <div className="up">
                <Link to="" className="up_btn">My Profile</Link>
                <Link to="/" className="up_btn">Log Out</Link>
            </div>
            <div className="down">
                <Link to="" className="btn1">Become a tutor</Link>
                <Link to="/AddAnnonce" className="btn5">Add an announcements</Link>
                <Link to="/saved" className="btn2">Saved announcements </Link>
                <Link to="/messages" className="btn3">Recieved Messages</Link>
                <Link to="/MyAnn" className="btn4">My announcements</Link>
            </div>
        </section>
      );
    }
  }
  
  export default Right;