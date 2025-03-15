interface Props {
  nombre: string;
  pcURL: string;
  andURL: string;
  ofURL: string;
  imVN: string;
}

function CardNovel(props: Props) {
  const { nombre, pcURL, andURL, ofURL, imVN } = props;
  return (
    <div className="card mb-3">
      <img src={imVN} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <div className="btn-group" role="group">
          <a className="card-text p-2" href={pcURL}>
            <button type="button" className="btn btn-primary">
              Windows-Linux
            </button>
          </a>
          <a className="card-text p-2" href={andURL}>
            <button type="button" className="btn btn-danger">
              Android
            </button>
          </a>
        </div>
        <div>
          <a href={ofURL}>Página Oficial</a>
        </div>
      </div>
    </div>
  );
}

export default CardNovel;
