import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AddAnno.css";


class AddAnno extends Component {
    render() {
      return (
        <div className="addAnno div4">
            <h1 className="c1">Add An Announcement : </h1>
            <div className="formulair">
              <div className="case1">
                <div className="add_img"></div>
              </div>
              <div className="case2">
                <div className="firstChild cldrr">
                  <h3>category</h3>
                  <input type="text" placeholder="primary, secondary ..." />
                </div>
                <div className="secondChild cldrr">
                  <h3>subject</h3>
                  <input type="text" placeholder="math, physics ..." />
                </div>
                <div className="thirdChild cldrr">
                  <h3>description</h3>
                  <textarea className="kbira" placeholder="some brief description about your class" ></textarea>
                </div>
              </div>
              <div className="case3">
                <div className="modality">
                  <h3 className="GRGZDS">modality</h3>
                  <div className="sdf fdsgds">
                    <div className="online fdsgds">
                      <input type="radio" />  
                      <h5 className="GRGZDS">online</h5>
                    </div>
                    <div className="offline fdsgds">
                      <input type="radio" />  
                      <h5 className="GRGZDS">In Person</h5>
                    </div>
                  </div>
                </div>
                <div className="prixDurre">
                      <div className="cldrr">
                        <h3>price</h3>
                        <input type="text" placeholder="exp : 10$" />
                      </div>
                      <div className="cldrr">
                        <h3>duration</h3>
                        <input type="text" placeholder="exp : 10h" />
                      </div>  
                </div>
                <div className="location">
                      <div className="cldrr">
                        <h3>location</h3>
                        <input type="text" placeholder="Bejaia.." />
                      </div>
                      <div className="cldrr fdsgsgds">
                        <h3>district</h3>
                        <input className="spergfd" type="text" placeholder="Amizour.." />
                      </div>  
                </div>
                <button className="submiiiit" >
                  submit
                </button>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default AddAnno; 