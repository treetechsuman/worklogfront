import React, { useState } from 'react'
import './App.css'
import {Button, MobileNav, ScrollMobileNav} from './components'
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const brand = { name: "WorkLog", href: "/"}
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  

  return (
    <div className='container-fluid'>
      
      <ScrollMobileNav brand={brand} links={links}></ScrollMobileNav>
    </div>
  )
}

export default App
