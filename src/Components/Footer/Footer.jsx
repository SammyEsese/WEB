import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Linkedln from '@iconscout/react-unicons/icons/uil-linkedin'



function Footer() {
  return (
    <div className="footer">
      
      <div className="f-content">
        <div className="shazam">
        <span>sammyesese@gmail.com</span>
        </div>
        <div className="f-icons">
        <a href="https://www.instagram.com/sammy_esese/"> <Insta color='white' size='3rem'/></a>
        <a href="https://www.facebook.com/ambany.sammy/"><Facebook color='white' size='3rem'/></a>
        <a href="https://github.com/SammyEsese"><Github color='white' size='3rem'/></a>
        <a href="https://twitter.com/sammy_esese"><Twitter color='white' size='3rem'/></a>
        <a href="https://www.linkedin.com/in/sammy-esese-8b82141a7/"><Linkedln color='white' size='3rem'/></a>

        </div>
       
     
      </div>
    </div>
  )
}

export default Footer