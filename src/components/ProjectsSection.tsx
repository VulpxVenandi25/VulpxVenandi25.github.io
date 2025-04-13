import { useState } from "react";
import projectsData from "../assets/json/projects.json";
import { ProjectCard } from "./Card";

function ProjectsSection() {
  const [filters, setFilters] = useState({
    state: "all",
    tag: "all",
    searchQuery: "",
  });

  // Todos los estados posibles de los proyectos
  const allStates = ["all", "active", "pauddes", "completed"];

  // Función de filtrado
  const filteredProjects = projectsData.Proyectos.filter((project) => {
    // Filtro por estado
    const stateMatch =
      filters.state === "all" || project.state === filters.state;

    // Filtro por búsqueda
    const searchMatch =
      filters.searchQuery === "" ||
      project.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase());

    return stateMatch && searchMatch;
  });

  return (
    <section id="projects" className="section">
      <h1 className="section-title">Proyectos en Desarrollo</h1>

      {/* Filtros */}
      <div className="filters-container">
        {/* Filtro por estado */}
        <div className="filter-group">
          <label>Estado:</label>
          <select
            value={filters.state}
            onChange={(e) => setFilters({ ...filters, state: e.target.value })}
          >
            {allStates.map((state) => (
              <option key={state} value={state}>
                {state === "all"
                  ? "Todos"
                  : state === "active"
                  ? "Activos"
                  : state === "paused"
                  ? "Pausados"
                  : "Completados"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Resultados */}
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              background={project.background}
              state={project.statusText}
              description={project.description}
              link={project.link}
            />
          ))
        ) : (
          <p className="no-results">
            No se encontraron proyectos con estos filtros.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
