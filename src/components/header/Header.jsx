import React from "react";
import "./header.css";
import TrollFace from "../../img/trollface.png";

const Header = () => {
  return (
    <div className="header">
      <nav className="header-nav">
        <a href="#header" className="nav-brand">
          <img src={TrollFace} alt="Troll face" className="brand-img" />
          <h4 className="brand-title">Meme Generator</h4>
        </a>

        <p className="course-number">React Course - Project 3</p>
      </nav>
    </div>
  );
};

export default Header;
