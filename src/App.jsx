import React, { useState } from 'react'
import './App.css'
import {Button, MobileNav, ScrollMobileNav,MobileFooterNav,Theme} from './components'
import {brand, links, navSettings,footerLinks, themeSettings} from './config/navConfig'

//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  

  return (
    <div className='container-fluid'>
      <ScrollMobileNav brand={brand} links={links}  fixed={navSettings.fixed}></ScrollMobileNav>
      <MobileFooterNav footerLinks={footerLinks} />
    </div>
  )
}

export default App
