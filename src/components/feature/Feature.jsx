import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-containers__feature'>
      <div className='gpt3__features-containers__feature-title'>
      
     <h1>{ title}</h1>  
     <div className='gpt3__features-container_feature-text'>
      {text}
      </div>    
    </div>
    </div>
  )
}

export default Feature
