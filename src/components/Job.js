import React from "react";

import RequiredSkill from "./RequiredSkill";

export default function Job({ data }) {
  const jobSkillarray = [
    data.role,
    data.level,
    ...data.languages,
    ...data.tools,
  ];

  return (
    <div
      className={`job-container${data.postedAt === "1d ago" ? " line" : ""}`}
    >
      <img src={data.logo} alt="company logo" className="company-logo" />
      <div className="about-job">
        <div className="company-featues">
          <h2 className="company-name">{data.company}</h2>
          <ul className="features">
            {data.new && <li className="new-feature">new!</li>}
            {data.featured && <li className="featured-feature">featured</li>}
          </ul>
        </div>
        <h3 className="position">{data.position}</h3>
        <ul className="details">
          <li className="posted-at">{data.postedAt}</li>
          <li className="contract">{data.contract}</li>
          <li className="location">{data.location}</li>
        </ul>
      </div>
      <ul className="required">
        {jobSkillarray.map((item, key) => (
          <RequiredSkill skill={item} key={key} />
        ))}
      </ul>
    </div>
  );
}
