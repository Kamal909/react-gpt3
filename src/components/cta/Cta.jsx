import React from 'react';
import './cta.css';

const Cta = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possibilities of AI.</h3>
        <p className='gpt3__cta-subtitle'>Join thousands of developers, entrepreneurs, and creators who are already building the future with GPT-3.</p>
      </div>
      <div className='gpt3__cta-buttons'>
        <button type='button' className='gpt3__cta-btn-primary'>Get Started</button>
        <button type='button' className='gpt3__cta-btn-secondary'>View Documentation</button>
      </div>
    </div>
  )
}

export default Cta
