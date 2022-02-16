import React from "react";

const AboutMe = () => {
  return (
    <div className="about-container" id="aboutme">
      <div className="inner-about">
        <h3>About Me</h3>
        <div className="my-description">
          <p>
            I'm a self-taught developer based in Venezuela, I feel comfortable
            using react as my mainly library while improving every day my skills
          </p>
        </div>
        <div className="information-container">
          <h4>Technologies I've worked with:</h4>
          <ul>
            <li>Html</li>
            <li>css</li>
            <li>javascript</li>
            <li>reactjs</li>
            <li>git / github</li>
            <li>scss</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
