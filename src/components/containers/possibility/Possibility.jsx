import React from 'react';

import poss from '../../../assets/poss.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={poss} alt="AI Possibilities" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Imagine a world where AI understands your needs before you express them. GPT-3 opens doors to unprecedented possibilities - from revolutionizing customer service with intelligent chatbots to transforming education with personalized learning experiences. The future of human-AI collaboration starts here, where creativity meets capability and innovation knows no bounds.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
