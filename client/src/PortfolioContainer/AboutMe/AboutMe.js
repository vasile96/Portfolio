import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description : [
      
      "👋 Hi, I'm Vasile, a Full Stack Developer with a unique blend of skills and passions. 🖥️",
      "🏡 Coming from a background in real estate sales and general sales, I bring a unique perspective to problem-solving. I thrive on understanding user needs and translating them into elegant digital solutions.",
      "🎵 Beyond coding, I strum melodies on my guitar and craft tunes as a DJ. Whether it's music or software, creativity fuels my passion. 🎸🎧",
      "👨‍🍳 I'm also a cook at De Drie Gezusters Restaurant, where the precision and creativity required in coding find their culinary counterpart. Cooking is my way of experimenting with flavors and pushing boundaries.",
      "💡 Combining my professional experience with my passion for music and cooking, I approach every project with creativity, precision, and a keen eye for detail. I'm excited to bring this unique perspective to your team and create exceptional digital experiences.",
      "🌟 Let's chat about how I can contribute to your tech projects while harmonizing the worlds of code, music, and culinary art.",
    ],
      
    highlights: {
      bullets: [
        "MERN Stack Enthusiast",
        "React UI Development",
        "Node.js Backend Skills",
        "Python Integration Expertise",
        "RESTful API Development ",
        "Git Collaboration and Version Control",
        "MongoDB Database Operations Skill",
        "Responsive UI Design",
        "Continuous Learning and Growth"
      ],
      heading: "Here are a Few Highlights:",
    },
  };
 
  

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  const renderDescription = () => {
    return SCREEN_CONSTSANTS.description.map((value, i) => (
      <div className="about-me-descrition" key={i}>
        <span>{value}</span>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
            {renderDescription()}
              
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="cv.pdf" download="vasile ursucv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
