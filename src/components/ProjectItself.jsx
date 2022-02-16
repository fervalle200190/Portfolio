import React from "react";

const ProjectItself = ({ el }) => {
  const { image, title, link } = el;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="project-cont">
        <img src={image} alt={"project"} />
        <h6>{title}</h6>
      </div>
    </a>
  );
};

export default ProjectItself;
