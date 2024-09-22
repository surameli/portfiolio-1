import React, { useState } from 'react';
import './resume.css';
// import { FaUserGraduate, FaBriefcase, FaCode, FaProjectDiagram, FaHeart } from 'react-icons/fa';
import HistoryIcon from '@mui/icons-material/History';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SchoolIcon from '@mui/icons-material/School';
import AddchartIcon from '@mui/icons-material/Addchart';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education');

  const renderContent = () => {
    switch (activeSection) {
      case 'education':
        return (
          <div className="content-section">
            <div className='ssss'>
                <div className='rtrtr'>
            <h3>University Unity, Ethiopia </h3>
            <p>Bachelor of computer Science </p>
            </div>
            <div className='tttt'>
            <span className="date">2021-2025</span>
            </div>
            </div>
            {/* <div className='ssss'>
                <div className='rtrtr'>
            <h3>National Youth Service Corps</h3>
            <p>Ministry of Science and Technology, Uyo Akwa Ibom State</p>
               </div>
             <div className='tttt'> 
                <span className="date">2019-2020</span></div>
             </div> */}
             <div className='ssss'>
              <div className='rtrtr'>
              <h3>High School </h3>
              <p>HI-TECH and HOPE of The EAST Academy</p>
              </div>
             <div className='tttt'>
              <span className="date">2017-2021</span></div>
              </div>
             <div className='ssss'>
                <div className='rtrtr'>
            <h3> FuLL Stack Web Development, </h3>
            <p> From Online Course Platform</p>
            </div>
            <div className='tttt'>
            <span className="date">2019-2024</span>
            </div>
            </div>
               
            <div className='ssss'>
                <div className='rtrtr'>
            <h3>Frontend web Development </h3>
            <p>From Online Course Platform</p>
            </div>
            <div className='tttt'>
            <span className="date">2021-2022</span>
            </div>
            </div>
            <div className='ssss'>
                <div className='rtrtr'>
            <h3>backend web Development </h3>
            <p>From Online Course Platform</p>
            </div>
            <div className='tttt'>
            <span className="date">2022-2024</span>
            </div>
            </div>

          </div>
        );
      case 'workHistory':
        return (
            <div className="content-section">
            <div className='ssss'>
                <div className='rtrtr'>
            <h3>University of Legon Accra, Ghana</h3>
            <p>Bachelor of Science Information Technology</p>
            </div>
            <div className='tttt'>
            <span className="date">2014-2018</span>
            </div>
            </div>
            <div>
            <h3>National Youth Service Corps</h3>
            <p>Ministry of Science and Technology, Uyo Akwa Ibom State</p>
            </div>
             <div> <span className="date">2019-2020</span></div>
           
              <div>
              <h3>High School</h3>
              <p>Command Secondary School Mbiri</p>
              </div>
             <div><span className="date">2007-2012</span></div>
            
          </div>
        )
       
       
        case 'skills':
          return (
            <div className="container">
              <h1 className="title-text">My Skills</h1>
              <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                  <span className="skill-per html">
                    <span className="tooltip">95%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                  <span className="skill-per css">
                    <span className="tooltip">75%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                  <span className="skill-per js">
                    <span className="tooltip">55%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                  <span className="skill-per NodeJS">
                    <span className="tooltip">65%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">Express</span>
                <div className="skill-bar">
                  <span className="skill-per Express">
                    <span className="tooltip">65%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                  <span className="skill-per ReactJS">
                    <span className="tooltip">75%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">Jquery</span>
                <div className="skill-bar">
                  <span className="skill-per Jquery">
                    <span className="tooltip">68%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">Bootstrap</span>
                <div className="skill-bar">
                  <span className="skill-per Bootstrap">
                    <span className="tooltip">55%</span>
                  </span>
                </div>
              </div>
            </div>
          );
        
         
            






      
       

      case 'projects':
        return <div className="content-section"><h3>University of Legon Accra, Ghana</h3>
        <p>Bachelor of Science Information Technology</p>
        <span className="date">2014-2018</span>
        <h3>National Youth Service Corps</h3>
        <p>Ministry of Science and Technology, Uyo Akwa Ibom State</p>
        <span className="date">2019-2020</span>
        <h3>High School</h3>
        <p>Command Secondary School Mbiri</p>
        <span className="date">2007-2012</span></div>;
      case 'interests':
        return <div className="content-section"><h3>University of Legon Accra, Ghana</h3>
        <p>Bachelor of Science Information Technology</p>
        <span className="date">2014-2018</span>
        <h3>National Youth Service Corps</h3>
        <p>Ministry of Science and Technology, Uyo Akwa Ibom State</p>
        <span className="date">2019-2020</span>
        <h3>High School</h3>
        <p>Command Secondary School Mbiri</p>
        <span className="date">2007-2012</span></div>;
      default:
        return null;
    }
  };

  return (
      <div>
      
        <div className="about-section">
          <h1>Resume</h1>
          <h2>My formal Bio Details</h2>
          <div className="underline">
            <span></span>
          </div>
        </div>
       
    <div className="resume-container">
         
      <div className="sidebar">
        <div className='sidebar-box'>
        <div
          className={`sidebar-item ${activeSection === 'education' ? 'active' : ''}`}
          onClick={() => setActiveSection('education')}
        >
          
          {/* <FaUserGraduate /> */}
          <SchoolIcon/>
          <span>Education</span>
        </div>
        <div
          className={`sidebar-item ${activeSection === 'workHistory' ? 'active' : ''}`}
          onClick={() => setActiveSection('workHistory')}
        >
          {/* <FaBriefcase /> */}
          <HistoryIcon/>
          <span>Work History</span>
        </div>
        <div
          className={`sidebar-item ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveSection('skills')}
        >
          {/* <FaCode /> */}
          <LaptopChromebookIcon/>
          <span>Programming Skills</span>
        </div>
        <div
          className={`sidebar-item ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveSection('projects')}
        >
          {/* <FaProjectDiagram /> */}
          <AddchartIcon/>
          <span>Projects</span>
        </div>
        <div
          className={`sidebar-item ${activeSection === 'interests' ? 'active' : ''}`}
          onClick={() => setActiveSection('interests')}
        >
          {/* <FaHeart /> */}
          <ColorLensIcon/>
          <span>Interests</span>
        </div>
      </div>
      </div>
      <div className="content">
      {renderContent()}
      </div>
    </div>
    {/* <div>qazqwerftyhujiopasdfghjkl</div> */}
    </div>
  );
};

export default Resume;
