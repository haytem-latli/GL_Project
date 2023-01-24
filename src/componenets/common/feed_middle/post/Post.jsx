import React, { Component } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import like from "./resources/like.png"
import save from "./resources/favorite.png"
import basket from "./resources/basket.png"

class Post extends Component {
    render() {
      return (
        <div className="post">
            <div className="right_side">
                <h5 className="post_availibility">{this.props.avai}</h5>
                <img className="post_img" src={this.props.img} alt="" />
                <img src={like} alt="" />
                <img src={save} alt="" />
                <img src={basket} alt="" />
            </div>
            <div className="left_side">
                <h5 className="post_type">{this.props.type}</h5>
                <h3 className="post_subject">{this.props.subject}</h3>
                <p className="post_description">{this.props.description}</p>
            </div>
        </div>
      );
    }
  }
  
  export default Post;