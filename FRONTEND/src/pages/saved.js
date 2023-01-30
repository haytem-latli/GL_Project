import React from "react" ;
import { Navbar,Footer,Left,Right,Middle,    } from "../componenets/common";

function Saved() {
    return(
        <div>
            <Navbar />
            <div className="parent">
                <Left />
                <Middle title="Favorite Announcement"/>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default Saved;