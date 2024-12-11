import React from "react";
import "../components/Projects.css";

const projects = [
  {
    title: "Weather App",
    description: "An online store built with React, Node.js, and MongoDB, featuring user authentication, product management, and Stripe payment integration.",
    image: "/Images/weather.jpg",
    liveLink: "https://prajalshete.github.io/JAVASCRIPT_Portfolio/weather-app/",
    githubLink: "https://github.com/prajalshete/JAVASCRIPT_Portfolio/tree/main/weather-app",
  },
  {
    title: "TO-DO List App",
    description: "A personal portfolio built with React.js and Framer Motion, showcasing projects and skills with a modern and responsive design.",
    image: "/Images/todo.jpg",
    liveLink: "https://prajalshete.github.io/JAVASCRIPT_Portfolio/To-Do%20List%20App/",
    githubLink: "https://github.com/prajalshete/JAVASCRIPT_Portfolio/tree/main/To-Do%20List%20App",
  },
  {
    title: "Color Picker Tool",
    description: "A platform for creating and booking event tickets, built using MERN stack with payment gateway integration.",
    image: "/Images/color_picker.jpg",
    liveLink: "https://prajalshete.github.io/JAVASCRIPT_Portfolio/Color%20Picker%20Tool/",
    githubLink: "https://github.com/prajalshete/JAVASCRIPT_Portfolio/tree/main/Color%20Picker%20Tool",
  },
  {
    title: "Color Flipper",
    description: "A weather forecasting app using React.js and OpenWeather API to display real-time weather updates.",
    image: "/Images/color_flipper.jpg",
    liveLink: "https://prajalshete.github.io/JAVASCRIPT_Portfolio/Color%20Flipper/",
    githubLink: "https://github.com/prajalshete/JAVASCRIPT_Portfolio/tree/main/Color%20Flipper",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
