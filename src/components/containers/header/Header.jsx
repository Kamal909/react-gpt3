import React from 'react';
import './header.css';
import Group81 from '../../../assets/Group81.png';
import Headerl from '../../../assets/Headerl.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OPENAI</h1>
        <p className='text'>Yet bedany for travelling assisatnce indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        
        <div className="gpt3__header-content_input">
         <input type="email" placeholder="Your Email please"/>
         <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content_people">
          <img src= {Group81}></img>
          <p>1600 people requested to access a visit in last 24hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={Headerl} alt="llusion"></img>
      </div>
    </div>
  )
}

export default Header
