import React from "react";
import {
    Navbar,
    Right,
    Addanno,
    Footer,
  } from "../componenets/common";
function AddAnnonce() {

  return (
    <div>
      <Navbar />
      <div className="container-1">
        <Addanno />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default AddAnnonce;