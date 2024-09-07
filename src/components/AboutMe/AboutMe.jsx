import React from "react";
import "./aboutme.css";
import "../Banner/Banner"
const AboutMe = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Me</h1>
        <h2>Why Choose Me?</h2>

        <div className="underline">
          <span></span>
        </div>
      </div>

      {/* body */}

      <div className="aboutme-container">
        <div className="aboutme-left">

        </div>
        <div className="aboutme-right">
          <div className="aboutme-right-p">
            <p>
              I'm a passionate and driven web developer with a strong focus on
              building interactive and user-friendly web applications. My
              journey in web development has led me to specialize in
              technologies like React, Node.js, Express, and MySQL, where I
              thrive in creating dynamic and responsive web experiences.
            </p>
          </div>
          <div className="aboutme-right-h3">
            <h3>   Name<span>:</span> Surafel Melliyon</h3>
            <h3>   Experience<span>:</span> 1+ Years</h3>
            <h3>   Nationality<span>:</span> Ethiopia</h3>
            <h3>   Freelance<span>:</span> Available</h3>
            <h3>   Phone<span>:</span> (+251) 0979820635</h3>
            <h3>   Email<span>:</span> SurafelMelliyon111@gmail.com</h3>
            <h3>   Languages<span>:</span> Amharic, English</h3>
          </div>
          <div className="profilr-optins">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}

            </button>
            <a href="#">
              <button className="btn highlighted-btn">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutMe;
