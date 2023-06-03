import React from 'react';
import './header.css';
import Group81 from '../../../assets/Group81.png';
import Headerl from '../../../assets/Headerl.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
     <div className="gpt3__header-content"></div>
     <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OPENAI</h1>
      <p className='text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div className="gpt3__header-content_input">
      <input type="email" placeholder="Your Email please"/>
      <button type="button">Get Started</button>
      </div>
      <div className="gpt3__header-content_people">
        <img src= {Group81}></img>
        <p>1600 people requested to access a visit in last 24hours</p>
      </div>
      <div className="gpt3__header-image">
        <img src={Headerl} alt="llusion"></img>
      </div>
    </div>
    
  )
}

export default Header
