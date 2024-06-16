import React from 'react'
import im from '../../assets/aboutus.png'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <h1 className="heading"><span>About</span> Us</h1>
        <div className='row'>
        <div className="image">
            <img src={im} alt="" />
        </div>
        <div className="content">
           <h3>Exploring , Growing, And Thriving Together</h3> 
           <p>Our  Preschool captures the natural curiosity of every child and stimulates their enthusiasm for learning.Here we treat every opportunity as a learning opportunity. </p>
        </div>
        </div>
    </div>
  )
}

export default About