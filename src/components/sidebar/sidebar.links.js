import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SideBarLinks = [
  {
    title: "Home",
    path: "/",
    className: "sidebar-link",
    icon:<AiIcons.AiFillHome/>

  },
  {
    title: "Analytics",
    path: "/analytics",
    className: "sidebar-link",
    icon:<FaIcons.FaCalculator/>
  },
  {
    title: "Charts",
    path: "/charts",
    className: "sidebar-link",
    icon:<FaIcons.FaChartArea/>
  },
  {
    title: "Cars",
    path: "/cars",
    className: "sidebar-link",
    icon:<FaIcons.FaCar/>
  },
  {
    title: "Logs",
    path: "/logs",
    className: "sidebar-link",
    icon:<FaIcons.FaHistory/>
  },
  {
    title: "Products",
    path: "/products",
    className: "sidebar-link",
    icon:<FaIcons.FaShoppingBasket/>
  },
];
