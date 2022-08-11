import React from "react";

import Job from "./Job";
import data from "../data";

export default function JobsContainer({ onClick, filterBySkills }) {
  let jobData = data;
  if (filterBySkills.length > 0) {
    jobData = data.filter((item) => {
      const jobSkillarray = [
        item.role,
        item.level,
        ...item.languages,
        ...item.tools,
      ];
      let bool = true;

      for (let i = 0; i < filterBySkills.length; i++) {
        if (!jobSkillarray.includes(filterBySkills[i])) {
          bool = false;
          break;
        }
      }

      return bool;
    });
  }
  return (
    <section className="jobs-container" onClick={onClick}>
      {jobData.map((jobDetails, key) => (
        <Job data={jobDetails} key={key} />
      ))}
    </section>
  );
}
