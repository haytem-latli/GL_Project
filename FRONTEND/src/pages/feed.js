import React from "react";
import {
    Navbar,
    Right,
    Left,
    Middle,
    Footer,
  } from "../componenets/common";
function Feed() {

  return (
    <div>
      <Navbar />
      <div className="parent">
        <Left />
         <Middle title=""/>
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default Feed;