import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../style/About.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <div className="about-img-container">
            <img
              src="/prajwal.png"
              alt="Prajwal Shinde"
              className="about-img"
            />
          </div>
          <div className="about-text-container">
            <h3 className="about-heading">About</h3>
            <p className="about-paragraph">
              Hi there! I'm <b>Prajwal Shinde</b>, the creator of this website.
              I'm a software engineer based in India and I love building things
              with code. In my free time, I enjoy playing video games and
              learning new skills.
            </p>
            <p className="about-paragraph">
              This MERN stack project is a collaborative code editor where
              multiple users can collaborate in real-time. Users can create
              rooms and invite others to join, and all users in the same room
              can see and change the code in real-time. The project is built
              using MongoDB, Express, React, and Node.js, and utilizes web
              sockets to facilitate real-time collaboration. This project is a
              great tool for developers who need to work on code together,
              whether they are remote or in the same physical location. It
              provides an easy and efficient way to collaborate on code and can
              improve the productivity of development teams.
            </p>
            <div className="about-social-container">
              <a
                href="https://www.linkedin.com/in/prajwal-shindee/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
              >
                <FaLinkedin className="about-social-icon" />
              </a>
              <a
                href="mailto:prajwalshindeee@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
              >
                <MdEmail className="about-social-icon" />
              </a>
            </div>
          </div>
        </div>
        <footer>
          <h4 className="">
            Built With 💓 By &nbsp;
            <a href="https://github.com/prajwal-shindee">Prajwal Shinde</a>
          </h4>
        </footer>
      </div>
    </>
  );
};

export default About;
