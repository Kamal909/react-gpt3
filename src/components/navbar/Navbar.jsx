import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/GPT-3.svg';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#home">What is GPT</a></p>
  <p><a href="#home">Case Studies</a></p>
  <p><a href="#home">Library</a></p>
  </>
)
const Navbar = () => {
  const[ toggleMenu, setToggleMenu] = useState(false);
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
        <div className="gpt3__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color = "#fff" size={27} onclick={() => setToggleMenu(false)} />
            : <RiMenu3Line color = "#fff" size={27} onclick={() => setToggleMenu(true)} />
             }
             {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links"></div>
                <Menu />
                <div className="gpt3__navbar-menu">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
      
             )
             }
        </div>
        </div>

  )
}

export default Navbar