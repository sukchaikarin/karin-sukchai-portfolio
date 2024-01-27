import React from "react";
import SkillsBar from "./SkillsBar";
import TestSkills from "./TestSkills";

const Skills = () => {
  return (
    <section className="py-12  xl:py-12   xl:pt-16 bg-secondary ">
      <SkillsBar />
      <TestSkills className="bg-secondary" />
    </section>
  );
};

export default Skills;
