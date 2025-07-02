import React from 'react';
import './features.css';
import Feature from '../../feature/Feature';

const featuresData = [
  {
    title: 'Advanced Natural Language Processing',
    text: 'GPT-3 understands context, nuance, and intent like never before. It can engage in meaningful conversations, understand complex queries, and provide human-like responses that feel natural and intelligent.'
  },
  {
    title: 'Multi-Modal Capabilities',
    text: 'Beyond text, GPT-3 can work with various data types and formats. It can analyze images, process structured data, and generate content across multiple modalities for comprehensive AI solutions.'
  },
  {
    title: 'Scalable & Customizable',
    text: 'Whether you need a simple chatbot or a complex AI system, GPT-3 scales to meet your requirements. Customize responses, fine-tune models, and adapt to your specific use case.'
  },
  {
    title: 'Real-Time Learning & Adaptation',
    text: 'GPT-3 continuously improves and adapts to new information and contexts. It learns from interactions, updates its knowledge base, and provides increasingly accurate and relevant responses.'
  },
  {
    title: 'Enterprise-Grade Security',
    text: 'Built with enterprise security in mind, GPT-3 ensures your data remains protected. Advanced encryption, secure APIs, and compliance with industry standards make it safe for business use.'
  },
  {
    title: 'Seamless Integration',
    text: 'Integrate GPT-3 into your existing applications with ease. Comprehensive APIs, SDKs, and documentation make implementation straightforward across web, mobile, and desktop platforms.'
  }
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>    
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
