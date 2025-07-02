import React from 'react';
import './header.css';
import Group81 from '../../../assets/Group81.png';
import Headerl from '../../../assets/Headerl.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p className='text'>Discover the power of artificial intelligence with GPT-3. Transform your ideas into reality with cutting-edge language processing technology that understands, creates, and innovates like never before.</p>
        
        <div className="gpt3__header-content__input">
         <input type="email" placeholder="Your Email Address" aria-label="Email address" />
         <button type="button" aria-label="Get started">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={Group81} alt="People avatars" />
          <p>1,600+ people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={Headerl} alt="AI Innovation Illustration" />
      </div>
    </div>
  )
}

export default Header
