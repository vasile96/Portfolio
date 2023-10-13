import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>
            <a href="https://www.facebook.com/vasile1ursu">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/vasileursu94/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/vasile-ursu-6097a1175/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/vasileursu94">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Vasile</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
              {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🛑",
                    1000,
                    "FullStack Developer 💻",
                    1000,
                    "MERN Developer 🤓",
                    1000,
                    "Very good DJ 😎",
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
              Full Stack Developer, crafting web solutions with precision <span role="img" aria-label="Man Emoji">👨‍💻</span>
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >Hire Me</button>
            <a href="cv.pdf" download='vasile ursucv.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
