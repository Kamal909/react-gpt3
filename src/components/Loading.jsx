import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading amazing AI content...</p>
      </div>
    </div>
  );
};

export default Loading; 