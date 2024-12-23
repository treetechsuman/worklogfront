// components/Nav.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollMobileNav from "./ScrollMobileNav";
import MobileFooterNav from "./MobileFooterNav";
import { links, footerLinks } from "../../config/config";
import Layout from "../layout/Layout";
import NotFound from "../../pages/NotFound";

// Import CSS for navigation components
import "../../styles/components/ScrollMobileNav.css";
import "../../styles/components/MobileFooterNav.css";

const Nav = ({ brand }) => {
  return (
    <Router>
      {/* Navigation Bar */}
      <ScrollMobileNav brand={brand} links={links} />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {links.map((link, index) => (
            <Route
              key={index}
              path={link.href === "/" ? "" : link.href.slice(1)} // Adjust for base path
              element={<link.component />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      
      {/* Footer */}
      <MobileFooterNav footerLinks={footerLinks} />
    </Router>
  );
};

export default Nav;
