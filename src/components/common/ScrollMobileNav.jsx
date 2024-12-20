import React from "react";
import '../../styles/components/ScrollMobileNav.css';

const ScrollMobileNav = ({brand, links }) => {
  return (
    <nav className="nav-contianer">
    <div className="brand"><a href={brand.href}>{brand.name}</a></div>
    <div className="scroll-mobile-nav">
        {links.map((link, index) => (
            <a key={index} href={link.href}>{link.label}</a>
        ))}  
        
    </div>
    </nav>
  );
}
export default ScrollMobileNav;