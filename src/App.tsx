import Card from "./components/Card";
import IFrame from "./components/IFrame";
import NovelasVisuales from "./dictionary";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            VulpxVenandi25
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#translate-vns">
                  Novelas Visuales traducidas por mi.
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Sobre mí
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <section id="translate-vns">
        <div className="align-items-center text-center">
          <h1>Novelas Visuales traducidas por mi.</h1>
          <div className="container">
            <div className="row justify-content-center">
              {Object.entries(NovelasVisuales).map(([key, novela]) => (
                <div key={key} className="col-md-4">
                  <Card
                    nombre={novela.nombre}
                    description={novela.description}
                    pcURL={novela.pcURL}
                    andURL={novela.andURL}
                    ofURL={novela.ofURL}
                    imVN={novela.imVN}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <br />
      <section id="about">
        <div>
          <IFrame />
        </div>
      </section>
    </>
  );
}

export default App;
