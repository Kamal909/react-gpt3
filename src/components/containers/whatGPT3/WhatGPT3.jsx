import React from 'react';
import './whatGPT3.css';
import Feature from '../../feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="whatgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature 
          title="What is GPT-3" 
          text="GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language model developed by OpenAI. It can understand, generate, and manipulate human-like text with remarkable accuracy. With 175 billion parameters, it's one of the most powerful AI models ever created, capable of writing essays, creating code, answering questions, and even composing poetry."
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature 
          title="Chatbots & Virtual Assistants" 
          text="Create intelligent conversational agents that can handle customer service, provide information, and engage in meaningful dialogue. GPT-3 powers chatbots that understand context and respond naturally."
        />
        <Feature 
          title="Content Creation & Writing" 
          text="Generate high-quality articles, blog posts, marketing copy, and creative content. From technical documentation to creative storytelling, GPT-3 can assist with various writing tasks."
        />
        <Feature 
          title="Code Generation & Programming" 
          text="Write, debug, and explain code in multiple programming languages. GPT-3 can generate functions, create documentation, and help developers solve complex programming challenges."
        />
        <Feature 
          title="Language Translation & Learning" 
          text="Translate between languages with context awareness and help create educational content for language learning. GPT-3 understands nuances and cultural context."
        />
        <Feature 
          title="Data Analysis & Insights" 
          text="Process and analyze large datasets, generate reports, and provide insights. GPT-3 can help interpret complex data and present findings in understandable formats."
        />
        <Feature 
          title="Creative Applications" 
          text="From poetry and storytelling to game design and art descriptions, GPT-3 fuels creativity across various domains, helping artists and creators bring their visions to life."
        />
      </div>
    </div>
  )
}

export default WhatGPT3
