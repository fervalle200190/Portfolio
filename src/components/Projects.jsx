import React from "react";
import Blogr from "../images/pages/Blogr.jpg";
import Ecommerce from "../images/pages/e-commerce.jpg";
import Countries from "../images/pages/rest-countries.jpg";
import SpaceApp from "../images/pages/space-app.jpg";
import TipCalculator from "../images/pages/tip calculator.jpg";
import ProjectItself from "./ProjectItself";

const initialDb = [
  {
    image: SpaceApp,
    title: "Space App",
  },
  {
    image: Countries,
    title: "Countries Information App",
  },
  {
    image: TipCalculator,
    title: "Tip Calculator",
  },
  {
    image: Ecommerce,
    title: "Tiny E-commerce",
  },
  {
    image: Blogr,
    title: "Blogr Landing Page",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h4>Projects</h4>
      <div className="inner-projects">
        {initialDb.map((el, index) => {
          return <ProjectItself key={index} el={el} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
