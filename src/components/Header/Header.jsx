import React, { useRef, useState } from 'react';
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const navref = useRef();
  const [navOpen, setNavOpen] = useState(false);

  const showNavbar = () => {
    navref.current.classList.toggle("responsive_nav");
    setNavOpen(!navOpen);
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <h1>Sura <span>.</span></h1>
      </div>
      <div className='header-right' ref={navref}>
        <ul>
          <li><a href="#Home" className='active'>Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
      
        </ul>
      </div>
      <button className='nav-btn' onClick={showNavbar}>
        {navOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};

export default Header;
