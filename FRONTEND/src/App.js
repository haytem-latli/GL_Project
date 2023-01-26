import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Feed from "./pages/feed";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import React from 'react';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact-us" element={<ContactUs />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/About-us" element={<AboutUs />} />
        <Route exact path="/Feed" element={<Feed />} /> 
      </Routes>
    </div>
  );
}

export default App;
