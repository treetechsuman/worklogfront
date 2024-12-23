import React from 'react';
import '../../styles/components/MobileFooterNav.css';
import { useTheme } from "../layout/ThemeContext";


const MobileFooterNav = ({footerLinks }) => {
const { theme, toggleTheme } = useTheme();
  return (
    <footer className={`mobile-footer-nav ${theme} ` } >
      <ul>
      {footerLinks.map((link, index) => (
        <li key={index}>
          <a  href={link.href}>
            {React.createElement(link.icon, { size: 24 })}
            <span>{link.label}</span>
          </a>
        </li>
      ))}
        
      </ul>
    </footer>
  );
};

export default MobileFooterNav;
