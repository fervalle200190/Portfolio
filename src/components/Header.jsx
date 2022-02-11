import React from "react";
import '../hamburgers.css'

const Header = () => {
  return (
    <header className="header-container">
      <nav className="menu-container">
        <div className="logo-container">
          <h1>Hello</h1>
        </div>
        <div className="menu-options">
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="dark-switch">
          <div className="burger-button">
            <button className="hamburger" type="button">
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
