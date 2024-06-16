import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Content from './Components/content/content'
import Footer from './Components/Footer/Footer'
import About from './Components/Aboutus/Ab'
import Program from './Components/program/program'
import Teacher from './Components/Teacher/Teacher'
import Education from './Components/Education/Education'
import Contact from './Components/Contactus/Contact'


function App() {

  return (
  <div className='container'>
   <Navbar/> 
   <Content/>
   <About/> 
   <Education/>
   <Teacher/> 
 <Contact/>
  </div> 

  )
}

export default App
