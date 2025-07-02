import React, { useState, useEffect } from 'react';

import { Header, WhatGPT3, Possibility, Blog, Footer, Feature, Statistics, Testimonials, Demo} from './components/containers';
import { Cta, Brand, Navbar, Loading, ScrollToTop } from './components';

import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar /> 
        <Header />
        <Brand />
        <WhatGPT3 />
        <Feature />
        <Statistics />
        <Testimonials />
        <Demo />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;