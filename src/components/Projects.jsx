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
    link: "https://tender-bhabha-50545f.netlify.app/"
  },
  {
    image: Countries,
    title: "Countries Information App",
    link: "https://hopeful-ramanujan-d571e1.netlify.app"
  },
  {
    image: TipCalculator,
    title: "Tip Calculator",
    link: "https://mystifying-brown-2896cf.netlify.app"
  },
  {
    image: Ecommerce,
    title: "Tiny E-commerce",
    link: 'https://zen-mclean-d4799b.netlify.app'
  },
  {
    image: Blogr,
    title: "Blogr Landing Page",
    link: "https://tender-bhabha-50545f.netlify.app/"
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
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
