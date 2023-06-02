import React from 'react';
import {  Header, Footer, Blog, Features, Possibility, WhatGPT3} from './components/containers';
import { Brand, Cta, Feature, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      
      <Brand />
      <Feature/>
      <Navbar/>
      <Cta />
    </div>
      ----- containers ---------
      <Header />
    </div>
  )
}

export default App
