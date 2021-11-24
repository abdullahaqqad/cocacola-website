import React from "react";
import "./sidebar.styles.css";
import { Link, useLocation } from "react-router-dom";

import { SideBarLinks } from "./sidebar.links";



const SideBar = () => {
  const location=useLocation();
  console.log(location.pathname);
  return (
    <div>
      
      <nav className="sidebar">
        
        <ul className="sidebar-links">
        <h1>DASHBOARD</h1>
        <hr className='line'/>
        <input type='search' placeholder={`search ${location.pathname.substr(1,location.pathname.length)} ...`} className='searchbox'/>
          {SideBarLinks.map((item, index) => {
            return (
              <Link to={item.path}>
                <li key={index} className={`${item.className} ${location.pathname === item.path ? 'active':''}`} >
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
