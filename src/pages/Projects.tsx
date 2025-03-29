import { useState } from "react";
import projectsData from "../assets/json/projects.json";
import ProjectCard from "../components/Card";
import "../assets/styles/project.css";

function Project() {
  const [proyectos] = useState(projectsData.Proyectos || []);

  return (
    <>
      <h1 className="text-h1">Algunos proyectos que estoy desarrollando.</h1>
      <div className="projects">
        {proyectos.map((data, index) => (
          <ProjectCard
            key={index}
            title={data.title}
            background={data.background} // Aquí deberías asegurarte de que sea una URL válida
            state={data.state}
            description={data.description}
            link={data.link}
          />
        ))}
      </div>
    </>
  );
}

export default Project;
