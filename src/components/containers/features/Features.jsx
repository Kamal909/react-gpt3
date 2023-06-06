import React from 'react';
import './features.css';

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-containers__feature'>
      <div className='gpt3__features-containers__feature-title'>
      </div>
      <div/>
     <h1>{ title}</h1>  
     <div className='gpt3__features-container_feature-text'>
      {text}
      </div>    
    </div>
    
  )
}

export default Feature
