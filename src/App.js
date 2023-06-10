import React from 'react';

import {  Header, WhatGPT3, Possibility, Blog, Footer, Feature} from './components/containers';
import { Cta, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
    <Navbar /> 
    <Header />
    <Brand />
    <WhatGPT3 />
    <Feature />
    <Possibility />
    <Cta />
    <Blog />
   <Footer />
    </div>
  </div>
);

export default App;