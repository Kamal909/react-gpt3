import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/GPT-3.svg';

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3_navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#home">What is GPT</a></p>
          <p><a href="#home">Case Studies</a></p>
          <p><a href="#home">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
