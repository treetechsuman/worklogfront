import React, { useEffect } from "react";
import '../../styles/components/ScrollMobileNav.css';
import { Link } from "react-router-dom"; // Import Link from React Router
import { useTheme } from "../layout/ThemeContext";
import ThemeToggle from '../layout/ThemeToggle'

const ScrollMobileNav = ({ brand, links, fixed = false, mode }) => {

  const position = fixed === true ? "fixed" : "";
  const { theme, toggleTheme } = useTheme();

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
      className={`nav-contianer ${theme} ${position}`} >
      <div className="brand"><Link href={brand.href} >{brand.name}</Link></div>
      <div className="scroll-mobile-nav">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle></ThemeToggle>
      </div>
    </nav>
  );
}
export default ScrollMobileNav;