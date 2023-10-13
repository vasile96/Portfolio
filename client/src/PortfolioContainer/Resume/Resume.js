import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import EducationIcon from '../../assets/Resume/education.svg'
import WorkHistoryIcon from '../../assets/Resume/work-history.svg'
import ProgrammingSkillsIcon from '../../assets/Resume/programming-skills.svg'
import ProjectsIcon from '../../assets/Resume/projects.svg'
import InterestsIcon from '../../assets/Resume/interests.svg'

const Resume = (props) => {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
  
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});


  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <button
  className="resume-heading-link"
  onClick={() => window.open(props.projectLink, '_blank')}
>
  <span>{props.projectLink ? 'Open Link' : ''}</span>
</button>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: EducationIcon },
    { label: "Work History", logoSrc: WorkHistoryIcon },
    { label: "Programming Skills", logoSrc: ProgrammingSkillsIcon },
    { label: "Projects", logoSrc: ProjectsIcon  },
    { label: "Interests", logoSrc: InterestsIcon },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 55 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "React Native", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 5 },
    { skill: "Node JS", ratingPercentage: 50 },
    { skill: "Mongo Db", ratingPercentage: 45 },
    { skill: "Java Spring", ratingPercentage: 15 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 10 },
    { skill: "jQuery", ratingPercentage: 70 },
    { skill: "REST & SOAP API", ratingPercentage: 60 },

  ];

  const projectsDetails = [
    {
      title: "To Do App in React",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A React-based To-Do app that helps you stay organized, manage tasks, and boost productivity effortlessly.",
      subHeading: "Technologies Used: HTML, CSS, JavaScript, React",
      projectLink: "https://main.dlj8o7s7vmz8u.amplifyapp.com/"
    },
    {
      title: "Tic Tac Toe Game in React ",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "A classic Tic-Tac-Toe game built in React, offering an interactive and enjoyable gaming experience",
      subHeading: "Technologies Used:  HTML, CSS, JavaScript, React",
      projectLink: "https://main.d3qso1o5l18mdg.amplifyapp.com/"
    },
    {
      title: "Calculator application ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "An simply calculator application that allows you to do math operations.",
      subHeading: "Technologies Used: HTML, CSS, JavaScript",
      projectLink: "https://dev3514.d2qyrd8xnzv661.amplifyapp.com/"
    },
    {
      title: "Sonia Stilo ",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Ecommerce website that I'm creating now for a skincare company from Italy. For this website I colaborated with a designer who helped me implement my ideas in Figma.",
      subHeading: "Technologies Used: Nextjs, TailwindCss, Sanity.io, Typescript, Redux and Stripe.",
      projectLink: "https://github.com/vasile96/soniastilo"
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Get Certified: ICT Opleidingen"}
        subHeading={"Full Stack Development"}
        fromDate={"2023"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"Analyst Programmer"}
        subHeading={
          "Ministry of National Education and Scientific Research, Romania"
        }
        fromDate={"2016"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Constantin Angelescu, Romania"}
        fromDate={"2011"}
        toDate={"2015"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Ursu Technogy"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          As a self-taught Full Stack Developer, I've embarked on a journey of continuous learning and hands-on experience in web development. Here's a summary of my work history:
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Online Learning: I've invested significant time in online courses, tutorials, and documentation to deepen my understanding of web development concepts, best practices, and emerging technologies.
          </span>
          <br />
          <span className="resume-description-text">
            - Open Source Contributions: Actively participating in open source projects has allowed me to collaborate with experienced developers, contribute to real-world projects, and improve my coding skills.
          </span>
          <br />
          <span className="resume-description-text">
            - Freelance Work: I've taken on freelance web development projects for individuals and small businesses, which provided valuable experience in client communication, project management, and meeting project deadlines.
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container project-details" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <div className="project-item" key={index}>
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          //description={projectsDetails.description}
          //fromDate={projectsDetails.duration.fromDate}
          //toDate={projectsDetails.duration.toDate}
          projectLink={projectsDetails.projectLink}
        />
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="I am an enthusiastic code writer and i belive that sharing our skills with others is crucial to develop a reliable IT society. Thats why from a junior position i am already thinking about sharing my future knowledge throut teching in several years."
      />
      <ResumeHeading
        heading="Music"
        description="Music is my passion, that's why interpreting it in my own way through dj-ing not only satisfies me, but also has been proven as good way to increase both, mine and overs productivity and good mood."
        projectLink="https://soundcloud.com/vasile-ursu-1/tracks"
      />
      <ResumeHeading
        heading="Walking"
        description="I really enjoy long walks because during them you can clear your mind and make space for the great ideas to come in."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
