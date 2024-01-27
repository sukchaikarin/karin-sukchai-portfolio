import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center  py-12  xl:py-12   xl:pt-16  ">
      <h2 className="h2 mb-6">Projects</h2>
      <div className="flex flex-wrap mt-10 gap-10 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
