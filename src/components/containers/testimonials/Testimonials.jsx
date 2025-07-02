import React, { useState } from 'react';
import './testimonials.css';
import { RiDoubleQuotesL, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "GPT-3 has revolutionized how we handle customer support. Our response times have improved by 80% and customer satisfaction is at an all-time high.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer, CodeCraft",
      content: "The code generation capabilities are incredible. It's like having a senior developer available 24/7. Our development speed has increased dramatically.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Content Director, CreativeFlow",
      content: "GPT-3 has transformed our content creation process. We can now produce high-quality articles and marketing copy in minutes instead of hours.",
      avatar: "👩‍🎨"
    },
    {
      name: "David Thompson",
      role: "AI Researcher, FutureTech",
      content: "The natural language understanding is remarkable. It's not just processing text - it's truly understanding context and intent.",
      avatar: "👨‍🔬"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gpt3__testimonials section__padding" id="testimonials">
      <div className="gpt3__testimonials-heading">
        <h1 className="gradient__text">What Our Users Say</h1>
        <p>Real stories from developers, entrepreneurs, and creators using GPT-3</p>
      </div>
      
      <div className="gpt3__testimonials-container">
        <button className="gpt3__testimonials-nav prev" onClick={prevTestimonial}>
          <RiArrowLeftLine />
        </button>
        
        <div className="gpt3__testimonials-content">
          <div className="gpt3__testimonials-quote">
            <RiDoubleQuotesL />
          </div>
          <p className="gpt3__testimonials-text">
            {testimonials[currentIndex].content}
          </p>
          <div className="gpt3__testimonials-author">
            <div className="gpt3__testimonials-avatar">
              {testimonials[currentIndex].avatar}
            </div>
            <div className="gpt3__testimonials-info">
              <h4>{testimonials[currentIndex].name}</h4>
              <p>{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>
        
        <button className="gpt3__testimonials-nav next" onClick={nextTestimonial}>
          <RiArrowRightLine />
        </button>
      </div>
      
      <div className="gpt3__testimonials-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`gpt3__testimonials-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 