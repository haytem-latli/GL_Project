import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Feed from "./pages/feed";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Saved from "./pages/saved";
import Buy from "./pages/Buy";
import MyAnn from "./pages/MyAnn";
import AddAnnonce from "./pages/AddAnnonce";
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
        <Route exact path="/Saved" element={<Saved />} /> 
        <Route exact path="/MyAnn" element={<MyAnn />} /> 
        <Route exact path="/Buy" element={<Buy />} /> 
        <Route exact path="/AddAnnonce" element={<AddAnnonce />} /> 
      </Routes>
    </div>
  );
}

export default App;
