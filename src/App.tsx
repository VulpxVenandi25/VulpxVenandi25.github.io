import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import Novels from "./pages/Novels";
import Project from "./pages/Projects";
import "./assets/styles/index.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-brand">
                <img
                  src="img/ic-vulpx.jpg"
                  alt="Logo"
                  className="navbar-logo"
                />
                <Link to="/" className="navbar-brand-link">
                  <span>VulpxVenandi25</span>
                </Link>
              </div>
              <input
                type="checkbox"
                id="navbar-toggle"
                className="navbar-toggle"
              />
              <label htmlFor="navbar-toggle" className="navbar-toggle-label">
                <span></span>
              </label>
              <div className="navbar-menu">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
                <Link to="/projects" className="nav-link">
                  Proyectos
                </Link>
                <Link to="/novels" className="nav-link">
                  Novelas Traducidas
                </Link>
                <Link to="/friends" className="nav-link">
                  Amigos
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/novels" element={<Novels />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
