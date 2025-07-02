import React from 'react';
import './statistics.css';

const Statistics = () => {
  const statsData = [
    {
      number: "175B",
      label: "Parameters",
      description: "Massive neural network powering GPT-3"
    },
    {
      number: "45TB",
      label: "Training Data",
      description: "Vast dataset for comprehensive learning"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service availability"
    },
    {
      number: "10M+",
      label: "API Calls",
      description: "Daily requests processed globally"
    }
  ];

  return (
    <div className="gpt3__statistics section__padding" id="statistics">
      <div className="gpt3__statistics-heading">
        <h1 className="gradient__text">GPT-3 by the Numbers</h1>
        <p>Impressive statistics that showcase the power and scale of GPT-3</p>
      </div>
      <div className="gpt3__statistics-container">
        {statsData.map((stat, index) => (
          <div key={index} className="gpt3__statistics-item">
            <div className="gpt3__statistics-number">
              <h2>{stat.number}</h2>
            </div>
            <div className="gpt3__statistics-content">
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics; 