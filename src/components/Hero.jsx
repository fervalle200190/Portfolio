import React from "react";

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="introduction">
        <span>Hello I'm</span>
        <h1>Fernando Vallejo</h1>
        <span>Front-end developer</span>
      </div>
      <div className="buttons-cont">
        <button>Download CV</button>
        <a href="#aboutme">
          <button>About me</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
