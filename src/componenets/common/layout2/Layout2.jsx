import React, { Component } from "react";
import "./Layout2.css";
import Panel from "./panel";
class Layout2 extends Component {
  render() {
    return (
      <section className="Layout2">
        <section className="panel_container">
          <Panel
            title="Face-To-Face "
            text="we organise real face-to-face lessons that will allow you to better assimilate the acquired notions, especially the application ones"
          />
          <Panel
            title="Online "
            text="thanks to the development of e-learning, teachers can offer online courses"
          />
        </section>
      </section>
    );
  }
}

export default Layout2;
