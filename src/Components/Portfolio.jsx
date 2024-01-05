/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "PIZZABAE",
    description:
      "A simple and user-friendly chatbot, that facilitates seamless pizza ordering for customers. Built by a team of four, the project’s source code is written in Python.",
    url: "https://github.com/Akanksha-202/pizzabae",
  },
  {
    title: "UniteUp.",
    description:
      "A platform leveraging cutting-edge technologies (React.js, Firebase, Material UI) for seamless project profile creation, sharing, and team member discovery.",
    url: "https://uniteup-3235.vercel.app/",
  },
  {
    title: "TravelSafe",
    description:
      "A web application that empowers women’s travel safety through features like fake video calls for constant contact and enhanced protection. Developed using React and TensorFlow for speech recognition.",
    url: "https://github.com/Akanksha-202/travel-safe",
  },
  {
    title: "What and Hoe: Github Copilot",
    description:
      "Hosted the hands-on workshop delving into the world of GitHub Copilot, an AI-powered coding assistant transforming the way developers work.",
    url: "https://mega.nz/file/GqRGVLyB#6rrluctA40iaJ1VMHYLvji5m0AI7jJcVSzghYCK2FGw",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
