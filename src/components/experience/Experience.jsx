import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  const data = [
    {
      title: "Frontend Development",
      skills: [
        {
          skill: "HTML",
          level: "Experienced",
        },
        {
          skill: "CSS",
          level: "Intermediate",
        },
        {
          skill: "JavaScript",
          level: "Experienced",
        },
        {
          skill: "Bootstrap",
          level: "Experienced",
        },
        {
          skill: "Material-UI",
          level: "Intermediate",
        },
        {
          skill: "React",
          level: "Experienced",
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          skill: "Node JS",
          level: "Experienced",
        },
        {
          skill: "MongoDB",
          level: "Intermediate",
        },
        {
          skill: "PHP",
          level: "Intermediate",
        },
        {
          skill: "MySQL",
          level: "Experienced",
        },
        {
          skill: "Firebase",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          skill: "Java",
          level: "Experienced",
        },
        {
          skill: "JavaScript",
          level: "Experienced",
        },
        {
          skill: "C/C++",
          level: "Intermediate",
        },
        {
          skill: "Python",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Programming Tools",
      skills: [
        {
          skill: "VS Code",
          level: "Experienced",
        },
        {
          skill: "Android Studio",
          level: "Experienced",
        },
        {
          skill: "IntelliJ IDEA",
          level: "Intermediate",
        },
        {
          skill: "Jupyter",
          level: "Intermediate",
        },
        {
          skill: "Git",
          level: "Intermediate",
        },
        {
          skill: "Canva",
          level: "Experienced",
        },
      ],
    },
  ];
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {data.map((experience, index) => {
          return (
            <div key={index} className="experience__block">
              <h3>{experience.title}</h3>
              <div className="experience_content">
                {experience.skills.map((skill, index) => {
                  return (
                    <article key={index} className="experience__details">
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div>
                        <h4>{skill.skill}</h4>
                        <small className="text-light">{skill.level}</small>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
