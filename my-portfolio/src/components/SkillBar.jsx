import React from "react";

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="progress-container">
        <div className="progress" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
