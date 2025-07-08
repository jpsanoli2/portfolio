import React from "react";
import skills from "../data/skills.json";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="section-card sm:flex-1 sm:mr-10">
      <h2 className="section-title">Mis habilidades</h2>
      <ul className="mt-5">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
