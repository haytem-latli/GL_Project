import React, { Component } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import like from "./resources/like.png"
import save from "./resources/favorite.png"
import basket from "./resources/basket.png"
import sales from "./resources/sales.png"
import time from "./resources/time.png"
import lessons from "./resources/lessons.png"

class Post extends Component {
    render() {
      return (
        <div className="post">
            <div className="right_side">
                <h5 className="post_availibility">{this.props.avai}</h5>
                <img className="post_img" src={this.props.img} alt="" />
                <div className="imgBtns">
                  <img className="imgBtns1" src={like} alt="" />
                  <img className="imgBtns2" src={save} alt="" />
                  <img className="imgBtns3" src={basket} alt="" />
                </div>
            </div>
            <div className="left_side">
                <h3 className="post_type">{this.props.type}</h3>
                <h3 className="post_subject">{this.props.subject}</h3>
                <p className="post_description">{this.props.description}</p>
                <div className="propsTop">
                      <div className="post_sales properties">
                        <img src={sales} alt="" />
                        <div className="place"></div>
                        <h4>{this.props.sales}</h4>
                        <div className="place"></div>
                        <h4>Sales</h4>
                      </div>
                      <h4 className="post_grade">{this.props.type_school} School</h4>
                </div>
                <div className="propsBottom">
                        <h5 className="post_price">$ {this.props.price}</h5>
                        <div className="post_time properties">
                          <img src={time} alt="" />
                          <div className="place"></div>
                          <h5>{this.props.period}h</h5>
                        </div>
                        <div className="post_lessons properties">
                          <img src={lessons} alt="" />
                          <div className="place"></div>
                          <h5>{this.props.nbrLessons}</h5>
                          <div className="place"></div>
                          <h5>Sales</h5>
                        </div>
                </div>
                <button className="learn_more">Learn More</button>
            </div>
        </div>
      );
    }
  }
  
  export default Post;