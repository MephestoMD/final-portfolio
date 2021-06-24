import React, { Component } from "react";
import Project from "./Project/Project";
import google_books from "./images/google_books.PNG";
import employee_directory from "./images/employee_directory.PNG";
import employee_tracker from "./images/employee_tracker.PNG";
import fitness_tracker from "./images/fitness_tracker.PNG";
import napkin_bets from "./images/napkin_bets.jpg";
import tech_blogger from "./images/tech_blogger.PNG";
import "./Project/project.css";

class Projects extends Component {
  render() {
    const projects = [
      {
        title: "Tech Blogger",
        image: { tech_blogger },
        technologies: ["GrNode", "DiNpm", "BsBootstrapFill", "GrMysql"],
        link: "https://limitless-lake-63247.herokuapp.com/",
      },
      {
        title: "Employee Tracker",
        image: { employee_tracker },
        technologies: ["GrNode", "DiNpm", "GrMysql"],
        link: "https://github.com/MephestoMD/employee-tracker.git",
      },
      {
        title: "Google Books Search",
        image: { google_books },
        technologies: [
          "GrNode",
          "DiNpm",
          "IoLogoNodejs",
          "FaReact",
          "DiMongodb",
        ],
        link: "https://arcane-beach-57005.herokuapp.com/search",
      },
      {
        title: "Napkin Bets",
        image: { napkin_bets },
        technologies: [
          "GrNode",
          "DiNpm",
          "GrMysql",
          "IoLogoNodejs",
          "BsBootstrapFill",
        ],
        link: "https://sleepy-shore-86546.herokuapp.com/",
      },
      {
        title: "Employee Directory",
        image: { employee_directory },
        technologies: ["GrNode", "DiNpm", "FaReact", "BsBootstrapFill"],
        link: "https://mephestomd.github.io/react-employee-directory/",
      },
      {
        title: "Fitness Tracker",
        image: { fitness_tracker },
        technologies: ["GrNode", "DiNpm", "DiMongodb"],
        link: "https://quiet-cove-12937.herokuapp.com/",
      },
    ];
    return (
      <div className="projectsDiv">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <p class="header-text">My Work</p>
            </div>
          </div>
        </section>

        <div className="album mainContainer">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {projects.map((project) => (
                <Project key={project.title} projects={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
