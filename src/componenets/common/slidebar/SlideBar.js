import React, { useState } from "react";
import "./SlideBar.css";
import menu from "./resources/images/menu.png";
import menu_clicked from "./resources/images/close-button.png";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

function SlideBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <section className="sl">
      <section className="slidebar">
        <img src={menu} alt="menu" onClick={showSidebar} />
      </section>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <img src={menu_clicked} alt="menu-clicked" onClick={showSidebar} />
          </li>
          <section className="Navtitle">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </section>
        </ul>
      </nav>
    </section>
  );
}

export default SlideBar;
