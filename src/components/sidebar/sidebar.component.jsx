import React from "react";
import "./sidebar.styles.css";
import { Link } from "react-router-dom";
import { SideBarLinks } from "./sidebar.links";

const SideBar = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1>WELCOME</h1>
      </nav>
      <nav className="sidebar">
        <ul className="sidebar-links">
          {SideBarLinks.map((item, index) => {
            return (
              <Link to={item.path}>
                
                  <li className={item.className}>{item.icon}{item.title}</li>
                
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default SideBar;
