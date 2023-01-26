import React, { Component } from "react";
import work from "./resources/images/work.png";
import logo from "./resources/images/logo.png";
import "./ContactPanel.css";
import { Link } from "react-router-dom";
class ContactPanel extends Component {
  onTodoChange(value) {
    this.setState({
      message: value,
    });
  }
  onTodoChange2(value) {
    this.setState({
      email: value,
    });
  }
  state = { message: "Your message", email: "Your Email" };
  render() {
    return (
      <section className="ContactPanel">
        <section className="rightS">
          <img src={work} alt="work" className="work"></img>
        </section>
        <section className="leftS">
          <Link to="/" className="displayp">
            <img src={logo} alt="logo" className="logoo"></img>
          </Link>
          <p className="helpText">
            If you need any help about our website, technical issues, or you
            want to report something, then feel free to send our customer
            service your message.
          </p>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.onTodoChange2(e.target.value)}
            className="email"
          ></input>
          <input
            type="text"
            value={this.state.message}
            onChange={(e) => this.onTodoChange(e.target.value)}
            className="message"
          ></input>
          <Link to="/" className="thebtn">
            <text className="btnN">send</text>
          </Link>
        </section>
      </section>
    );
  }
}

export default ContactPanel;
