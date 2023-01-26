import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Left.css";

class Left extends Component {
    render() {
      return (
        <section className="left div1">
            <h2>Search by filters</h2>
            <form className="filter_form">
                <input list="Wilaya" placeholder="Wilaya" />
                <datalist id="Wilaya">
                    <option value="Jijel" />
                    <option value="Bejaia" />
                </datalist>
                <input list="District" placeholder="District" />
                <datalist id="District">
                    <option value="Jijel" />
                    <option value="tahir" />
                </datalist>
                <input list="Subject" placeholder="Subject" />
                <datalist id="Subject">
                    <option value="Math" />
                    <option value="Art" />
                </datalist>
                <div className="period_temps">
                    <p>By a period of time</p>
                    <div className="temps">
                        <div className="min">
                            <p>min</p>
                            <input type="date"/>
                        </div>
                        <div className="max">
                            <p>max</p>
                            <input type="date"/>
                        </div>
                    </div>
                </div>
                <button>SUBMIT</button>
            </form>
        </section>
      );
    }
  }
  
  export default Left;