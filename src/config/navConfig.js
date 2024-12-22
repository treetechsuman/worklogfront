// src/config/navConfig.js
import { FaSearch, FaHome, FaRegBell  ,FaAddressBook, FaUser  } from "react-icons/fa";
export const brand = {
    name: "Work Log",
    href: "/",
  };
  
  export const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Test", href: "/test" },
    { label: "Profile", href: "/profile" },
    { label: "login", href: "/login" },
    { label: "FAQ", href: "/faq" },
  ];
  export const footerLinks = [
    { label: "Home", href: "/", icon:FaHome },
    { label: "Search", href: "/Search", icon:FaSearch },
    { label: "Notification", href: "/notification", icon:FaRegBell   },
    { label: "Contact", href: "/contact", icon:FaAddressBook  },
    { label: "Profile", href: "/profile", icon:FaUser },
  ];
  export const navSettings = {
    variant: "dark5",   // Navbar variant can provide "dark" or "light"
    fixed: true,      // Whether the navbar should fixed to the top
  };
  export const themeSettings = {
    variant: "dark"
  };
  