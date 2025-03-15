import "../static/css/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="cm-navbar navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              className="d-inline-block align-text-top"
              style={{ borderRadius: "15px" }} // Bordes más suaves
              src="/img/logo.png"
              width={50}
              height={50}
              alt="Logo"
            />
            <span className="ms-2">VulpxVenandi25</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#principal"
              >
                Principal
              </a>
              <a className="nav-link" href="#novelas">
                Novelas Traducidas
              </a>
              <a className="nav-link" href="#redes">
                Redes Sociales
              </a>
              <a className="nav-link" href="#apoyo">
                Apoyo
              </a>
              <a className="nav-link" href="#sobre-mi">
                Sobre mí
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
