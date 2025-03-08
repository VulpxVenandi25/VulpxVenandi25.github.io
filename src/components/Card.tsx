import "../styles/styles.css";

interface Props {
  nombre: string;
  description: string;
  pcURL: string;
  andURL: string;
  ofURL: string;
  imVN: string;
}

function Card(props: Props) {
  const { nombre, description, pcURL, andURL, ofURL, imVN } = props;
  return (
    <div className="card text-bg-dark bg-img">
      <img src={imVN} className="card-img" alt="Background" />
      <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title text-center">
          <mark className="mark-bg">{nombre}</mark>
        </h5>
        <p className="card-text text-center">
          <mark className="mark-bg">{description}</mark>
        </p>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <a
                className="btn btn-primary m-1"
                href={pcURL}
                target="_black"
                download
              >
                Windows-linux
              </a>
              <a
                className="btn btn-danger m-1"
                href={andURL}
                target="_black"
                download
              >
                Android
              </a>
            </div>
          </div>
          <div className="col">
            <a href={ofURL} target="_blank">
              <mark className="mark-bg">Página oficial</mark>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
