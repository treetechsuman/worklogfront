import React, { useState } from 'react'
import './App.css'
import {Button} from './components'


function App() {
  
  const handleClick=()=>{
    alert("Button Clicked")
  }
  

  return (
    <>
      <h1>This is app component</h1>
      <Button variant='success' size="sm" onClick={handleClick}>Click Me</Button>
    </>
  )
}
import 'bootstrap/dist/css/bootstrap.min.css';
export default App
