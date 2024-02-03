"use client";
import SkillsFilters from "./SkillsFilters";
import SkillsCard from "./SkillsCard";
import { createContext, useState } from "react";
import { dataskill } from "./DataSkills";
// Create context
export const SkillContext = createContext();
const MySkills = () => {
  const [allSkills, setAllSkills] = useState(dataskill);
  const [filterSkills, setFilterSkills] = useState(dataskill);
  const value = {
    allSkills,
    filterSkills,
    setFilterSkills,
  };
  return (
    <SkillContext.Provider value={value}>
      <div className="bg-secondary container">
        <SkillsFilters />
        <div className="flex flex-wrap items-center justify-center mt-10 gap-8">
          <SkillsCard />
        </div>
      </div>
    </SkillContext.Provider>
  );
};

export default MySkills;
