import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Captiona - MERN Social Media App",
    github: "https://github.com/subhasis4502/captiona",
    demo: "https://captiona.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Pizza Restaurant Web-App",
    github: "https://github.com/subhasis4502/pizza_restaurant",
    demo: "https://subhasis-pizza-restaurant.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "My Portfolio Site",
    github: "https://github.com/subhasis4502/portfolio-site",
    demo: "#",
  },
  {
    id: 4,
    image: IMG4,
    title: "LetsChat - Android Chat Application",
    github: "https://github.com/subhasis4502/LetsChat",
    demo: "https://github.com/subhasis4502/LetsChat/blob/main/LetsChat.apk",
  },
  {
    id: 5,
    image: IMG5,
    title: "Live News App - Using Javascript",
    github: "https://github.com/subhasis4502/live-news",
    demo: "https://subhasis4502.github.io/live-news",
  },
  {
    id: 6,
    image: IMG6,
    title: "Magic Notes - JavaScript Notes App",
    github: "https://github.com/subhasis4502/magic_notes",
    demo: "https://subhasis4502.github.io/magic_notes/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Covid-19 World Map",
    github: "https://github.com/subhasis4502/corona_map",
    demo: "https://subhasis4502.github.io/corona_map/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Todo List: Chrome Extension",
    github: "https://github.com/subhasis4502/Web-Projects/tree/main/Chrome%20Extensions/To-do%20List",
    demo: "https://github.com/subhasis4502/Web-Projects/blob/main/Chrome%20Extensions/To-do%20List/To-do%20List.crx",
  },
  {
    id: 9,
    image: IMG9,
    title: "Web Scraper: Chrome Extension",
    github: "https://github.com/subhasis4502/Web-Projects/tree/main/Chrome%20Extensions/Web%20Scraper",
    demo: "https://github.com/subhasis4502/Web-Projects/blob/main/Chrome%20Extensions/Web%20Scraper/Web%20Scraper.crx",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item-cta">
                <a href={project.github} className="btn" target="_blank">
                  Git Repo
                </a>
                <a
                  href={project.demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
