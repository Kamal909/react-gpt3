import React from 'react';
import './whatGPT3.css';
import Feature from '../../feature/Feature';



const WhatGPT3 = () => {
  return (
    <div className='gpt__whatgpt3 section__margin' id="whpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature />
        <Feature title="What is GPT-3" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilites are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
         <Feature title="Chatbots" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        <Feature title="Knowledgebase" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        <Feature title="Education" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/> 
      </div>
    </div>
  )
}

export default WhatGPT3
