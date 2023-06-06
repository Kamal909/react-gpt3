import React from 'react';
import './features.css';

const features = ({title, text}) => {
  return (
    <div className='gpt3__features-containers__feature'>
      <div className='gpt3__features-containers__feature-title'>
      <div />
     <h1>{ title}</h1>  
     </div>
     <div className='gpt3__features-container_feature-text'>
      {text}
      </div>    
    </div>
   
  )
}

export default features
