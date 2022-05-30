import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u9qnqep', 'template_txpmzo3', form.current, 'KNK1Aj3e1PBG2-R_k')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };





  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
      
          Contact Me!
        </div>
      </div>


      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button ton"/>
          <span>{done && "Thanks for contacting me"}</span>
        </form>
      </div>

    </div>
  )
}

export default Contact