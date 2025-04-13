import { useState, useEffect } from "react";
import projectsData from "../assets/json/projects.json";
import FriendData from "../assets/json/friends.json";
import NovelData from "../assets/json/novels.json";
import { FriendCard, NovelCard, ProjectCard } from "../components/Card";
import "../assets/styles/home.css";

function Home() {
  const [proyectos] = useState(projectsData.Proyectos || []);
  const [novelas] = useState(NovelData.Novelas || []);
  const [friends] = useState(FriendData.Amigos || []);
  const [projectFilter, setProjectFilter] = useState("all");

  const filteredProjects =
    projectFilter === "all"
      ? proyectos
      : proyectos.filter((proj) => proj.state === projectFilter);

  // Efecto para manejar el scroll inicial si hay hash en la URL
  useEffect(() => {
    const handleInitialScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "auto" });
          }
        }, 100);
      }
    };

    handleInitialScroll();
  }, []);

  return (
    <div className="text-center">
      {/* Sección Inicio (opcional) */}
      <section id="home" className="hero-section">
        {/* <h1 className="text-h1">Bienvenido a mi portafolio</h1>
        <p>Desplázate para ver mis proyectos, traducciones y colaboradores</p> */}
      </section>

      {/* Sección de Proyectos */}
      <section id="projects" className="text-center">
        <h1 className="text-h1">Proyectos en Desarrollo</h1>
        <div className="filter-buttons">
          {["all", "active", "paused", "completed"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                projectFilter === filter ? "active" : ""
              }`}
              onClick={() => setProjectFilter(filter)}
            >
              {filter === "all"
                ? "Todos"
                : filter === "active"
                ? "Activos"
                : filter === "paused"
                ? "Pausados"
                : "Completados"}
            </button>
          ))}
        </div>

        <div className="projects">
          {filteredProjects.map((data, index) => (
            <ProjectCard key={`project-${index}`} {...data} />
          ))}
        </div>
      </section>

      {/* Sección de Novelas */}
      <section id="novels" className="text-center">
        <h1 className="text-h1">Novelas Traducidas</h1>
        <div className="novels">
          {novelas.map((data, index) => (
            <NovelCard key={`novel-${index}`} {...data} />
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href="https://1024terabox.com/s/1L-GAGHOrCfQvChpL_4O9Zw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver más novelas traducidas
          </a>
        </div>
      </section>

      {/* Sección de Amigos */}
      <section id="friends" className="text-center">
        <h1 className="text-h1">Links de otros creadores</h1>
        <div className="friends">
          {friends.map((data, index) => (
            <FriendCard key={`friend-${index}`} {...data} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
