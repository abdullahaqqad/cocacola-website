import React from "react";
import "./sidebar.styles.css";
import { Link } from "react-router-dom";
import { SideBarLinks } from "./sidebar.links";

const SideBar = () => {
  return (
    <div>
      <nav className="sidebar">
        <ul className="sidebar-links">
          {SideBarLinks.map((item, index) => {
            return (
              <Link to={item.path}>
                <li key={index} className={item.className}>
                  {item.icon}
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default SideBar;
