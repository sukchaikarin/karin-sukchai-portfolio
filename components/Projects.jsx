import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center  py-6  xl:py-24  "
    >
      <h2 className="h2 ">Projects</h2>
      <div className="flex flex-wrap mt-10 gap-6 px-4">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
