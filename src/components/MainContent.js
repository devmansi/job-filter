import React from "react";

import FilterBar from "./FilterBar";
import JobsContainer from "./JobsContainer";

export default function MainContent() {
  const [filterBySkills, setFilterItems] = React.useState([]);

  function clearFilterItem(e) {
    if (e.target.classList.contains("clear")) {
      setFilterItems([]);
    }

    if (e.target.alt === "close") {
      filterBySkills.splice(
        filterBySkills.indexOf(e.target.previousSibling.textContent),
        1
      );
      setFilterItems([...filterBySkills]);
    }
  }

  function searchBySkills(e) {
    if (!e.target.parentElement.classList.contains("required")) {
      return;
    }

    if (!filterBySkills.includes(e.target.textContent)) {
      setFilterItems([...filterBySkills, e.target.textContent]);
    }
  }

  return (
    <React.Fragment>
      <FilterBar filterBySkills={filterBySkills} onClick={clearFilterItem} />
      <JobsContainer filterBySkills={filterBySkills} onClick={searchBySkills} />
    </React.Fragment>
  );
}
