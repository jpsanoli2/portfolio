import React from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="section-card">
      <h2 className="section-title">Proyectos</h2>
      <ul className="sm:flex sm:justify-center mt-5 sm:mt-5">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
