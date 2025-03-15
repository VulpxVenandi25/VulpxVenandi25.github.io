import CardNovel from "../components/Card";
import VNs from "../dictionary/Novelas.json";

function Novels() {
  const { NovelasVisuales } = VNs;
  return (
    <>
      <section id="novelas">
        <div className="align-items-center text-center">
          <h1>Novelas Visuales traducidas por mi.</h1>
          <div className="container">
            <div className="row justify-content-center">
              {Object.entries(NovelasVisuales).map(([key, novela]) => (
                <div key={key} className="col-md-4">
                  <CardNovel
                    nombre={novela.nombre}
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
    </>
  );
}

export default Novels;
