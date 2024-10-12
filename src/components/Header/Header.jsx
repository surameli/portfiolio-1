import React, { useRef, useState } from 'react';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const navRef = useRef();
  const [navOpen, setNavOpen] = useState(false);

  const showNavbar = () => {
    setNavOpen(!navOpen);
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <h1>Sura <span>.</span></h1>
      </div>
      <div className='header-right' ref={navRef}>
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
