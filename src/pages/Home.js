import React from "react";
import {
  Header,
  Layout2,
  Layout3,
  Footer,
  Navbar,
} from "../componenets/common";
import { Layout1 } from "../componenets/common";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Layout1 />
      <Layout2 />
      <Layout3 />
      <Footer />
    </div>
  );
}

export default Home;
