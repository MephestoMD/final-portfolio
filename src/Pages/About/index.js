import React from "react";
import "../Home/Hero/Hero.css";
import rubix from "./images/rubix.jpg";
const About = () => {
  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1 className="display-4">
            <span className="d-flex align-items-center heroText">
              About me!
            </span>
          </h1>
          <p className="lead">
            <span className="subText">
              I'm a full-stack web developer based in Columbus, OH, but I was
              born in Dayton, OH. I moved to Columbus in 2008 to attend The Ohio
              State University, where I earned a B.A. in Philosophy.
              <p class="paragraphBreak">
                While there, I realized that the classes I enjoyed the most were
                those in the sub-field of Logic. After graduation, I discovered
                an entire technical field based heavily upon logic...the logic
                of algorithms! The realization that I could marry my love of
                technology with logic lead me to where I am today.
              </p>
            </span>
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img src={rubix} alt="Maxson Green" className="myPhoto" />
        </div>
      </div>
    </div>
  );
};

export default About;
