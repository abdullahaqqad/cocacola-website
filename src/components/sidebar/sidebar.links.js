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
    title: "Page 1",
    path: "/page1",
    className: "sidebar-link",
    icon:<FaIcons.FaPagelines/>
  },
  {
    title: "Page 2",
    path: "/page2",
    className: "sidebar-link",
    icon:<FaIcons.FaXRay/>
  },
  {
    title: "Page 3",
    path: "/page3",
    className: "sidebar-link",
    icon:<FaIcons.FaCookie/>
  },
  {
    title: "Page 4",
    path: "/page4",
    className: "sidebar-link",
    icon:<FaIcons.FaWindowClose/>
  },
  {
    title: "Page 5",
    path: "/page5",
    className: "sidebar-link",
    icon:<FaIcons.FaSortAmountDown/>
  },
];
