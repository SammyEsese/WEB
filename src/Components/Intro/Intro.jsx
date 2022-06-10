import React from 'react'
import './Intro.css'
import Profile from '../../img/profile (1).png';

function Intro() {
  return (
    <div className='container-1'>
    
      <div className="bo1-1">
      <div className="name">
      <span>Hello! I Am<br/> </span>
      <span>Sammy Esese<br/></span>
      <span>Frontend Developer and founder of SammTech with high level 
      of experience in web designing 
      and development producing Quality work on time.<br/>
      Embrace the power of full stack development to
      realize the full potential of your business.
      </span>
      </div>
      <button className="button">Download Resume</button>
      </div>

      <div className="box-2">
      <img src={Profile} alt="" />
      </div>

       
       </div>

  )
}

export default Intro

