import React, { useState } from 'react';
import './demo.css';
import { RiSendPlaneFill, RiRobotLine } from 'react-icons/ri';

const Demo = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const demoPrompts = [
    "Write a short poem about artificial intelligence",
    "Explain quantum computing in simple terms",
    "Create a JavaScript function to sort an array",
    "Write a professional email to schedule a meeting"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Here's a thoughtful response to your query about AI and its capabilities...",
        "I'd be happy to help you with that! Let me provide a comprehensive answer...",
        "Based on your request, here's what I can suggest...",
        "That's an interesting question. Let me break this down for you..."
      ];
      
      setResponse(responses[Math.floor(Math.random() * responses.length)]);
      setIsLoading(false);
    }, 2000);
  };

  const handlePromptClick = (prompt) => {
    setInputText(prompt);
  };

  return (
    <div className="gpt3__demo section__padding" id="demo">
      <div className="gpt3__demo-heading">
        <h1 className="gradient__text">Try GPT-3 Yourself</h1>
        <p>Experience the power of AI language processing with our interactive demo</p>
      </div>
      
      <div className="gpt3__demo-container">
        <div className="gpt3__demo-input-section">
          <h3>Quick Prompts</h3>
          <div className="gpt3__demo-prompts">
            {demoPrompts.map((prompt, index) => (
              <button
                key={index}
                className="gpt3__demo-prompt-btn"
                onClick={() => handlePromptClick(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="gpt3__demo-form">
            <div className="gpt3__demo-input-wrapper">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask GPT-3 anything..."
                className="gpt3__demo-input"
              />
              <button type="submit" className="gpt3__demo-submit" disabled={isLoading}>
                <RiSendPlaneFill />
              </button>
            </div>
          </form>
        </div>
        
        <div className="gpt3__demo-response-section">
          <div className="gpt3__demo-response-header">
            <RiRobotLine />
            <h3>GPT-3 Response</h3>
          </div>
          
          <div className="gpt3__demo-response-content">
            {isLoading ? (
              <div className="gpt3__demo-loading">
                <div className="gpt3__demo-loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>GPT-3 is thinking...</p>
              </div>
            ) : response ? (
              <p>{response}</p>
            ) : (
              <p className="gpt3__demo-placeholder">
                Enter a prompt above to see GPT-3 in action!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo; 