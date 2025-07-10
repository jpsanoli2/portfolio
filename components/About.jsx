import React from "react";
import Name from "./Name";

const About = ({ align }) => {
  return (
    <div className={`section-card md:m-0`}>
      <div className="hidden md:block">
        <Name />
      </div>
      <div className="md:hidden">
        <h2 className="section-title">Sobre mí</h2>
      </div>
      <p className="section-text md:mb-5">
      Soy un Desarrollador Full Stack en formación, con una sólida comprensión en la creación de aplicaciones web robustas y
      escalables. Tengo experiencia en el desarrollo de APIs, la gestión de bases de datos y el diseño de interfaces intuitivas y
      responsivas. Me apasiona optimizar el rendimiento tanto en el frontend como en el backend, asegurando la calidad y la eficiencia
      del código en cada proyecto. Soy una persona comprometida, siempre en busca de oportunidades para aprender y mejorar mis
      habilidades en el desarrollo de aplicaciones completas y de alto rendimiento.
      </p>
    </div>
  );
};

export default About; 
