import React, { useRef, useState } from 'react';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

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
          <li className='active'>
            <Link to ="Home" smooth ={true} duration={500}>Home</Link>
            </li>
          <li> <Link to ="AboutMe" smooth ={true} duration={500}>AboutMe</Link></li>
          <li> <Link to ="Resume" smooth ={true} duration={500}> Resume</Link></li>
          <li> <Link to ="Resume" smooth ={true} duration={500}>Work</Link> </li>
          <li> <Link to ="Contact" smooth ={true} duration={500}>Contact</Link> </li>
        </ul>
      </div>
      <button className='nav-btn' onClick={showNavbar}>
        {navOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};

export default Header;
