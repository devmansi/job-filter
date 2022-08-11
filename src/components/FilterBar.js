import React from "react";

import SkillFilter from "./SkillFilter";

export default function FilterBar({ filterBySkills, onClick }) {
  return (
    <section className="filter" onClick={onClick}>
      <div className="filter-list">
        {filterBySkills.map((item, key) => (
          <SkillFilter skill={item} key={key} />
        ))}
      </div>
      <span className="clear">Clear</span>
    </section>
  );
}
