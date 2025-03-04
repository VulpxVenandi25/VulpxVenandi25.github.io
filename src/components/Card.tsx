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
    <>
      <h1>{nombre}</h1>
      <p>{description}</p>
      <img src={imVN} />
      <div className="container text-center">
        <p>Links</p>
        <div className="row align-items-center"></div>
        <div className="col">
          <a href={pcURL}>
            <button className="btn-primary">Windows-linux</button>
          </a>
          <a href={andURL}>
            <button className="btn-primary">Android</button>
          </a>
        </div>
        <div className="col">
          <a href={ofURL}>Página oficial.</a>
        </div>
      </div>
    </>
  );
}

export default Card;
