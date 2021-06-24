import React from "react";
import "./Hero.css";
import Me from "../images/Me.jpg";
const Hero = () => {
  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1 className="display-4">
            <span className="d-flex align-items-center heroText">
              Hello! I'm Maxson.
            </span>
          </h1>
          <p className="lead">
            <span className="subText">
              I'm a full-stack web developer based in Columbus, OH.
              <p>Welcome to my personal portfolio page!</p>
            </span>
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img src={Me} alt="Maxson Green" className="myPhoto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
