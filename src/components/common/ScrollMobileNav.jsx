import React, { useEffect } from "react";
import '../../styles/components/ScrollMobileNav.css';
import {Theme} from '../../components'

const ScrollMobileNav = ({brand, links , fixed=false }) => {
  
  const position= fixed===true ? "fixed" : "";

  // Handle the animation reset on component load
  useEffect(() => {
    const navLinks = document.querySelector('.scroll-mobile-nav');
    if (navLinks) {
      navLinks.style.animation = 'none'; // Reset animation
      navLinks.offsetHeight; // Trigger reflow to restart the animation
      navLinks.style.animation = ''; // Apply the animation again
    }
  }, []);

  return (
    <nav 
    className={`nav-contianer ${position}`} >
    <div className="brand"><a href={brand.href} >{brand.name}</a></div>
    <div className="scroll-mobile-nav">
        {links.map((link, index) => (
            <a 
            key={index} 
            href={link.href}
            >
              {link.label}
            </a>
        ))} 
        <Theme></Theme> 
    </div>
    </nav>
  );
}
export default ScrollMobileNav;