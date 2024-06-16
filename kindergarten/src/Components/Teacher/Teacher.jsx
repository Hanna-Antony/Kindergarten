import React from 'react'
import './Teacher.css';
import teach1 from '../../assets/teacher1.png'
import teach2 from '../../assets/teacher2.png'
import teach3 from '../../assets/teacher3.png'

const Teacher = () => {
  return (
    <div id='teacher' className='teacher'>
        <h1 class='heading'>our <span>Teachers</span></h1>
    <div className="box-container">
        <div className="box">
            <img src={teach1} alt="" />
            <h3>Linda George</h3>
            <p>Instructor</p>
        </div>
        <div className="box">
            <img src={teach2} alt="" />
            <h3>Hilda Francis</h3>
            <p>Instructor</p>
        </div>
        <div className="box">
            <img src={teach3} alt="" />
            <h3>Lidia Martin</h3>
            <p>Instructor</p>
        </div>
    </div>
 
    </div>
  )
}

export default Teacher