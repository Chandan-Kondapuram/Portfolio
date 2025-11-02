import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
// import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  // return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div className="skills-container">
      {skills.data.map((skill, index) => {
        return (
          <Fade bottom duration={800} distance="30px" key={skill.title}>
            <div className="skills-main-div">
              <div className="skills-text-div">
                <h1 className="skills-heading">{skill.title}</h1>
                <SoftwareSkill logos={skill.softwareSkills} />
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p key={skillSentence} className="skills-text">
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
}

export default SkillSection;
