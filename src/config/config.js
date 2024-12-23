// src/config/navConfig.js
import Home from "../pages/Home";
import About from "../pages/About";


import { FaSearch, FaHome, FaRegBell, FaAddressBook, FaUser } from "react-icons/fa";
export const brand = {
  name: "Work Log",
  href: "/",
};

export const links = [
  { label: "Home", href: "/home", component: Home },
  { label: "About", href: "/about", component: About },

];
export const footerLinks = [
  { label: "Home", href: "/", icon: FaHome },
  { label: "Search", href: "/Search", icon: FaSearch },
  { label: "Notification", href: "/notification", icon: FaRegBell },
  { label: "Contact", href: "/contact", icon: FaAddressBook },
  { label: "Profile", href: "/profile", icon: FaUser },
];
export const navSettings = {
  fixed: true,      // Whether the navbar should fixed to the top
};

