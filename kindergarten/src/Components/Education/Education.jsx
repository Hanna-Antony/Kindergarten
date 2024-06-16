import React from 'react'
import play from '../../assets/play.jpg'
import music from '../../assets/music.jpg'
import stud from '../../assets/stud.jpg'
import './Education.css'

const Education = () => {
  return (
    <div id='education' className='education'>
        
        <h1 className="heading">Education</h1>
        <div className="education-container">
            <div className="education-card">
            <img src={stud} alt="" />
            <h2 className="tittle">School Lessons</h2>
            <div className="details">
                <p>Kindergarten is a critical period for children’s cognitive,social,and emotional development. </p>
            </div>
           
        </div>

        <div className="education-card">
            <img src={play} alt="" />
            <h2 className="tittle">Sports Lessons</h2>
            <div className="details">
                <p>Sports provide valuable opportunities for children to interact with peers,form friendships,and develop critical social skills. </p>
            </div>
        </div>
        <div className="education-card">
            <img src={music} alt="" />
            <h2 className="tittle">Music Lessons</h2>
            <div className="details">
                <p> Music ignites all areas of child development and skills for school readiness,including intellectual,social-emotional,and overall literacy. It helps the body and the mind work together</p>
            </div>
        </div>
        
        
        </div>
    </div>
  )
}

export default Education