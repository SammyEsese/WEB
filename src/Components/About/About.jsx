import React from 'react'
import './About.css'

function About() {
  return (
       
       <>
    <div className="services">
    WELCOME TO OUR AWESOME<br/> SERVICES!
    </div>
       
       <div className="about">
      <div className="welcome">
        <p>Accelerate your web and<br/> mobile app development
           with our<br/> full stack development services</p>
      </div>

      <div className="front-end">
        <h1 className='h2'>Front-end Development Services</h1>
        <div className="kark">
        We are eperts in full stack front-end development<br/>
        languages such as HTML, CSS/SCSS, Bootstrap,<br/>
         JavaScript, Node.js and React. We focus on<br/>
         using technologies that not only make your<br/>
         solutions attractive, but also enhance its performance.<br/>
         We make sure that your website has a user friendly UI/UX.
         </div>

      </div>

      <div className="back-end">
        <h1 className='h1'>Back-end Development Services</h1>
        <div className="back">
          We are proficient in handling applications<br/>
          that run on servers like applications and APIs.<br/>
          We build websites that function seamlesly<br/>
          and fulfil the expectations of our customers.<br/>
          For back-end, we use programming languages such<br/>
          and frameworks such as Python, SQL, Node.js,<br/>
          ASP.NET and Laravel.

        </div>

      </div>
    </div>
    </>
  )
}

export default About