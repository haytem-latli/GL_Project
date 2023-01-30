import React, { Component } from "react";
import "./Middle.css";
import Post from "./post";
import photo_1 from "./resources/art.png";
import axiosInstance from '../../../axios/axios';
import { useEffect } from 'react';




function Middle(props) {

  useEffect(() => {
    axiosInstance.get().then((res) => {
      const allPosts = res.data;
      console.log(res.data);
    });
  },);


      return (
        <section className="middle div2">
          <h1 className="page_title">{props.title}</h1>
          <Post 
            img={photo_1} 
            avai="available" 
            type="Onlin Courses"
            subject="Art"
            description="We focus on developing your skills in your comfort zone. It's only a keystroke away."
            sales="15"
            type_school="Primary"
            price="6.48"
            period="22"
            nbrLessons="24"
          />
        </section>
      );
  }
  
  export default Middle;