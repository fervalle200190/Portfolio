import React, { useState } from "react";
import '../hamburgers.css'

const Header = () => {
  const [active, setActive] = useState("")
  const [menu, setMenu] = useState("")
  const handleClick = ()=> {
    if(active === "is-active") {
      setActive("")
      setMenu("")
    } else {
      setActive("is-active")
      setMenu("show")
    }
  }
  return (
    <header className="header-container">
      <nav className="menu-container">
        <div className="logo-container">
          <h1>Welcome</h1>
        </div>
        <div className={`menu-options ${menu}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="dark-switch">
          <div className="burger-button" onClick={handleClick}>
            <button className={`hamburger hamburger--squeeze ${active}`} type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
