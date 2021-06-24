import React, { Component } from "react";
import "./project.css";
import { FaReact } from "react-icons/fa";
import { GrNode, GrMysql } from "react-icons/gr";
import { DiNpm, DiMongodb } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import Technologies from "./Technologies";

const Project = (props) => {
  const { title, image, technologies, link } = props.projects;
  console.log(props);
  return (
    <div className="col">
      <div className="card projectCard">
        <img
          className="projectImage"
          src={Object.values(image)[0]}
          aria-label={title}
        ></img>

        <div className="card-body">
          {/* <p className="card-text">
            {technologies.map((tech) => (
              <Technologies key={tech.techs} techs={tech} />
            ))}
          </p> */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm" href={link}>
                <span class="link-text" style={{ fontSize: 20 }}>
                  App
                </span>
              </button>
              <button type="button" className="btn btn-sm">
                {/* <span class="link-text"> Link2(unused)</span> */}
              </button>
            </div>
            <small>{title}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
