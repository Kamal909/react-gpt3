import React from 'react';
import GPT from '../../../assets/GPT.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__foooter-links-logo'>
          <img src={GPT} alt="logo"></img>
          <p>Crechterwoord K12 182 DK Alknjkcb, <br />All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
       
        <div className='gpt3__footer-links_div'>
          <h3>Company</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>         
        </div>
     
         <div className='gpt3__footer-links_div'>
          <h3>Get in touch</h3>
          <p>Crechterwoord K12 182 DK Alknjkcbs</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
        </div>
        <div className='gpt3__footer-copyright'>
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
