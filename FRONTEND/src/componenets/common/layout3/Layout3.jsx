import React, { Component } from "react";
import "./Layout3.css";
import UserCard from "./user_card";
import profile_Pic1 from "./resources/images/user-cover-1.png";
import profile_Pic2 from "./resources/images/user-cover-2.png";
import profile_Pic3 from "./resources/images/user-cover-3.png";
import profile_Pic4 from "./resources/images/user-cover-4.png";
class Layout3 extends Component {
  render() {
    return (
      <section className="Layout3">
        <section className="title_panel">
          <h6 className="title_panel_text1">Team</h6>
          <h3 className="title_panel_text2">Get Quality Education</h3>
          <p className="title_panel_text3">Our best rated teachers</p>
        </section>
        <section className="cards_container">
          <UserCard
            profile_pic={profile_Pic1}
            name="Jamal Olatunji"
            speciality="Math Teacher"
          />
          <UserCard
            profile_pic={profile_Pic2}
            name="Julian Dixon"
            speciality="History Teacher"
          />
          <UserCard
            profile_pic={profile_Pic3}
            name="Yinka Smith"
            speciality="Music Teacher"
          />
          <UserCard
            profile_pic={profile_Pic4}
            name="Karen Jameson"
            speciality="Art Teacher"
          />
        </section>
      </section>
    );
  }
}

export default Layout3;
