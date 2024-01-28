"use client";
import SkillsFilters from "./SkillsFilters";
import SkillsCard from "./SkillsCard";

// Create context

const MySkills = () => {
  return (
    <div className="bg-secondary container">
      <SkillsFilters />
      <div className="flex flex-wrap items-center justify-center mt-10 gap-8">
        <SkillsCard />
      </div>
    </div>
  );
};

export default MySkills;
