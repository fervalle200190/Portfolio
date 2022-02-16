import React from "react";

const ProjectItself = ({ el }) => {
  const { image, title } = el;
  return (
    <div className="project-cont">
      <img src={image} alt="" />
      <h6>{title}</h6>
    </div>
  );
};

export default ProjectItself;
