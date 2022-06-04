import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { TiBriefcase } from "react-icons/ti";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>CGPA</h5>
              <small>8.5 (* Fifth Semester)</small>
            </article>
            <article className="about__card">
              <TiBriefcase className="about__icon" />
              <h5>Degree</h5>
              <small>B.E-I.T(Persuing)</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ (3 Full-Stack)</small>
            </article>
          </div>
          <p>
            Hi! My name is <strong>Subhasis das</strong>. I am a Full Stack
            Developer, Android Developer. Pursuing a Bachelor of Engineering in
            Information Technology from <strong>Jadavpur University</strong>. I
            am quite comfortable working on the following languages HTML, CSS,
            Javascript, Node.js, React.js, Backend languages NodeJS, MongoDB,
            MySQL, Firebase etc. My primary interests are Web & Android Projects
            both Front and Back end. I made multiple Full-Stack Projects like
            the Pizza Delivery app and the Social Media app, Android Chat Application etc.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
