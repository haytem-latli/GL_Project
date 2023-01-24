import React, { Component } from "react";
import "./Panel.css";
class Panel extends Component {
  render() {
    return (
      <section className="panel">
        <hr color="#38C6BD" width="25%" size="7" className="panel_line" />
        <h2 className="panel_title">{this.props.title} Lessons</h2>
        <text className="panel_text">{this.props.text}</text>
      </section>
    );
  }
}

export default Panel;
