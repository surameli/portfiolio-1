import React from "react";
import "./contactme.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import myImage from '../../asset/images/mailz.jpeg'; 

const ContactMe = () => {
  return (
    <div id="Contact" className="contactme-section">
          <div className="about-section">
          <h1>Contact Me</h1>
          <h2>Lets Keep In Touch</h2>
          <div className="underline">
            <span></span>
          </div>
        </div>
      <div className="contact-container">
        <div className="left-section">
          <h3>Get In Touch <MailOutlineIcon/> </h3>
          <div className="social-icons">
            <FacebookIcon />
            <GoogleIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </div>
          <p className="email-text">Send Your Email Here!</p>
          <div className="email-background">
            <img src={myImage} alt="Background Icons" />
          </div>
        </div>

        <div className="right-section">
          <form>
            <h3>Name</h3>
            <input type="text"  required />
             <h3>Email</h3>
            <input type="email"  required />
            <h3>Message</h3>
            <textarea required></textarea>
            <button type="submit">
              send <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
