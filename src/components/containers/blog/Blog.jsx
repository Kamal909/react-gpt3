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
           <Article  imgUrl={blog01}  title="GPT3 and Open  AI is the future Let us exlore how it is?" />
          </div>
          <div className='gpt3__blog-container_groupB'>
            <Article imgUrl={blog02} title="GPT3 and Open  AI is the future Let us exlore how it is?" date="Nov 24, 2023"/>
            <Article imgUrl={blog03} title="GPT3 and Open  AI is the future Let us exlore how it is?" date="Nov 24, 2023"/>
            <Article imgUrl={blog04} title="GPT3 and Open  AI is the future Let us exlore how it is?" date="Nov 24, 2023"/>
            <Article imgUrl={blog05} title="GPT3 and Open  AI is the future Let us exlore how it is?" date="Nov 24, 2023"/>
           </div>
        </div>
      </div>
  )
}

export default Blog
