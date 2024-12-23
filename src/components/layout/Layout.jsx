import React from "react";
import { Outlet } from "react-router-dom";
import {ScrollMobileNav} from "../../components";
import { brand, links, navSettings } from "../../config/config";


const Layout = () => {
  return (
    <>
      <ScrollMobileNav brand={brand} links={links} fixed={navSettings.fixed} />
      <div className="content">
        <Outlet /> {/* Renders the child routes */}
      </div>
    </>
  );
};

export default Layout;
