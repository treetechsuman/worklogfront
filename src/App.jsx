import React, { useState } from 'react'
import './App.css'
import {Button, MobileNav} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const brand = { name: "WorkLog", href: "/"}
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  

  return (
    <div className='container'>
      <MobileNav brand={brand} links={links} bg="dark" variant="dark" ></MobileNav>
      <Button variant='success' size="sm" >Click Me</Button>
    </div>
  )
}

export default App
