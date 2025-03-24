import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="img/ic-vulpx.jpg" alt="Logo" className="navbar-logo" />
          <span>VulpxVenandi25</span>
        </div>

        <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
        <label htmlFor="navbar-toggle" className="navbar-toggle-label">
          <span></span>
        </label>

        <div className="navbar-menu">
          <a href="/" className="nav-link">
            Inicio
          </a>
          <a href="/proyects" className="nav-link">
            Proyectos
          </a>
          <a href="/novels" className="nav-link">
            Novelas Traducidas
          </a>
          <a href="/social" className="nav-link">
            Redes
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
