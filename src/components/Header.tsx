import { useEffect, useState } from "react";
import { SECTIONS } from "../App";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTIONS.HOME);

  // Actualizar sección activa al cargar o cambiar hash
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || SECTIONS.HOME;
      setActiveSection(currentHash);
    };

    handleHashChange(); // Inicializar
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Cerrar menú al navegar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.hash]);

  // Manejar tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Scroll suave al hacer clic en enlaces
  const handleSmoothScroll = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky-top">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img
              src="img/ic-vulpx.jpg"
              alt="Logo"
              className="navbar-logo"
              loading="lazy"
              width="40"
              height="40"
            />
            <a
              href={SECTIONS.HOME}
              className="navbar-brand-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(SECTIONS.HOME);
              }}
            >
              <span>VulpxVenandi25</span>
            </a>
          </div>

          <input
            type="checkbox"
            id="navbar-toggle"
            className="navbar-toggle"
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <label htmlFor="navbar-toggle" className="navbar-toggle-label">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
            {Object.entries(SECTIONS).map(([name, hash]) => (
              <a
                key={hash}
                href={hash}
                className={`nav-link ${activeSection === hash ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(hash);
                }}
              >
                {name === "HOME"
                  ? "Inicio"
                  : name === "PROJECTS"
                  ? "Proyectos"
                  : name === "NOVELS"
                  ? "Novelas"
                  : "Otros Creadores"}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
