import React, { useState } from "react";
import {
    Navbar,
    Right,
    Left,
    Middle,
    Footer,
  } from "../componenets/common";
function Feed() {

  const [active, setActive]= useState("Landing");

  return (
    <div>
      <Navbar />
      <div className="parent">
        <Left />
        {active==="Landing" && <Middle title=""/>}
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default Feed;