import React from "react";
import TestSkills from "./TestSkills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center  py-6   xl:py-24 bg-secondary "
    >
      <h2 className="h2 ">Skills</h2>
      <TestSkills className="bg-secondary" />
    </section>
  );
};

export default Skills;
