import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={1000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1 className="projects-heading-text">{projectsHeader.title}</h1>
              <p className="projects-header-detail-text">
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="projects-row-section">
        <Fade bottom duration={1000} distance="30px">
          <div className="repo-cards-div-main">
            {projects.data.map((repo, index) => {
              return <ProjectCard repo={repo} theme={theme} key={index} />;
            })}
          </div>
        </Fade>
      </div>
      <div style={{ textAlign: "center" }}>
        <a
          className="general-btn"
          href={socialMediaLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects (Github)
        </a>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
