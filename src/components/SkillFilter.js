import React from "react";
import close from "../images/icon-remove.svg";

export default function SkillFilter({ skill }) {
  return (
    <div className="filter-item-container">
      <p className="filter-item">{skill}</p>
      <img src={close} className="close-img" alt="close" />
    </div>
  );
}
