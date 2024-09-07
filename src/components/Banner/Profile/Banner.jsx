import React from "react";
import "./banner.css";
import Typical from "react-typical";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
const Banner = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#" className="facebook">
              {" "}
              <FacebookIcon />
            </a>
            <a href="#" className="github">
              {" "}
              <GitHubIcon />
            </a>
            <a href="#" className="linkedin">
              {" "}
              <LinkedInIcon />
            </a>
            <a href="#" className="telegram">
              {" "}
              <TelegramIcon />
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text"> Surafel Melliyon</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Backend developer",
                    1000,
                    "Frontend develope",
                    1000,
                    "Full Stack developer",
                    1000,
                    "MERN Stack developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I'm skilled in web development and particularly enthusiastic
                about building web applications using React, Express, Node.js,
                and MySQL.
              </span>
            </span>
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
        <div className="prfiole-images">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
