import React from 'react'
import './content.css'
import image from '../../assets/home.png'
const Content = () => {
  return (
   
    <div id='home' className="home">
    <div className="content">
      <h3>Welcome to our <span><br/>Kindergarten</span></h3>
      
      <p>Little learners grow up and become just what the world needs.</p>
    </div>
    <div className="image">
      <img src={image} alt="" />
    </div>
  </div>
  )
}

export default Content