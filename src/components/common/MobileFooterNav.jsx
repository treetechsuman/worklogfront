import React from 'react';
import { FaHome, FaSearch, FaBell, FaUser } from 'react-icons/fa'; // Import icons from react-icons
import '../../styles/components/MobileFooterNav.css';
const MobileFooterNav = ({footerLinks }) => {

  return (
    <footer className={`mobile-footer-nav`} >
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
