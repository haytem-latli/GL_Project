import React from "react" ;
import { Navbar,Footer,Left,Right,Middle, } from "../componenets/common";

function MyAnn() {
    return(
        <div>
            <Navbar />
            <div className="parent">
                <Left />
                <Middle title="My Announcements"/>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default MyAnn;