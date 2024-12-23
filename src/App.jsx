import React, { useState } from 'react'
import './App.css'
import { Button, ScrollMobileNav, MobileFooterNav } from './components'
import { ThemeProvider } from './components/layout/ThemeContext'
import { links, footerLinks } from './config/config'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout'
import NotFound from './pages/NotFound';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
    <ThemeProvider>
      <div className='container-fluid'>
        <Router>
          <Routes>
            {/* Parent route with Layout */}
            <Route path="/" element={<Layout />}>
              {/* Dynamically generate child routes */}
              {links.map((link, index) => (
                <Route
                  key={index}
                  path={link.href === "/" ? "" : link.href.slice(1)} // Adjust for base path
                  element={<link.component />}
                />
              ))}
              {/* Fallback route for unmatched paths */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
        <MobileFooterNav footerLinks={footerLinks} />
      </div>
    </ThemeProvider>
  )
}

export default App
