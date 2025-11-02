import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo: project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: theme.text,
    background: theme.projectCard,
    border: `1px solid ${theme.borderColor}`,
    boxShadow: theme.glassShadow,
    padding: "24px",
    cursor: "pointer",
    borderRadius: "18px",
    height: "100%",
    transition: "all 0.2s ease",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: theme.hoverShadow,
      background: theme.cardHover,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={project.name}
          onClick={() => openRepoinNewTab(project.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {project.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {project.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={project.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
