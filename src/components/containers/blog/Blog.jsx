import React from 'react';
import './blog.css';
import Article from '../../articles/Article';
import { blog01, blog02, blog03, blog04, blog05 } from '../../brand/import';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article 
            imgUrl={blog01} 
            title="GPT-3 and OpenAI: Revolutionizing the Future of Artificial Intelligence" 
            date="Dec 15, 2024"
          />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article 
            imgUrl={blog02} 
            title="How GPT-3 is Transforming Content Creation and Digital Marketing" 
            date="Dec 12, 2024"
          />
          <Article 
            imgUrl={blog03} 
            title="The Impact of AI Language Models on Software Development" 
            date="Dec 10, 2024"
          />
          <Article 
            imgUrl={blog04} 
            title="Building Intelligent Chatbots with GPT-3: A Complete Guide" 
            date="Dec 8, 2024"
          />
          <Article 
            imgUrl={blog05} 
            title="Ethical Considerations in AI: Balancing Innovation with Responsibility" 
            date="Dec 5, 2024"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
