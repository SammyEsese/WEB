import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'






function Navbar() {


  return (
    <>
    <div className='First'>
  
     <div className='Logo'>Samm<span>Tech</span></div>




     <div className='Navbar-content'>
       <ul className='tap'>

         


       <Link spy={true} to='Navbar'  smooth={true} activeClass='activeClass'>
         <li>HOME</li>
         </Link>

       <Link spy={true} to='ABOUT'  smooth={true} activeClass='activeClass'>
         <li>ABOUT</li>
         </Link>
         

      <Link spy={true} to='PORTFOLIO'  smooth={true} activeClass='activeClass'>
         <li>PORTFOLIO</li>
         </Link>

      <Link spy={true} to='PORTFOLIO'  smooth={true} activeClass='activeClass'>
      <li>TESTIMONIALS</li>
      </Link>

      <Link spy={true} to='PORTFOLIO'  smooth={true} activeClass='activeClass'>
      <li>CONTACT</li>
      </Link>

       </ul>
     </div>
  
   </div>

   </>
    
  )
}

export default Navbar