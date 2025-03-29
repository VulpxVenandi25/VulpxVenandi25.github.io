import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/card.css";

interface Props {
  title: string;
  background: string;
  state: string;
  description: string;
  link: string;
}

interface NovProps {
  title: string;
  background: string;
  andURL: string;
  pcURL: string;
  ofURL: string;
}

function ProjectCard(props: Props) {
  const { title, background, state, description, link } = props;
  return (
    <div className="card card-project mb-3">
      <img className="card-img-top" src={background} alt={title} />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{description}</p>
        <p>
          <small className="text-body-secondary">{state}</small>
        </p>
        <a className="card-project-link" href={link} target="_blank">
          Ver proyecto
        </a>
      </div>
    </div>
  );
}

function NovelCard(props: NovProps) {
  const { title, background, andURL, pcURL, ofURL } = props;
  return (
    <div className="card card-novel text-bg-dark">
      <img className="card-img" src={background} alt={title} />
      <div className="card-img-overlay">
        <h1 className="card-title card-novel-title">{title}</h1>
        <div
          className="btn-group card-novel-links mt-auto mx-auto"
          role="group"
        >
          <a
            type="button"
            className="btn card-novel-link btn-primary"
            href={andURL}
            target="_blank"
          >
            Android
          </a>
          <a
            type="button"
            className="btn card-novel-link btn-danger"
            href={pcURL}
            target="_blank"
          >
            Windows-Linux
          </a>
          <a
            target="_blank"
            type="button"
            className="btn card-novel-link btn-success"
            href={ofURL}
          >
            Oficial
          </a>
        </div>
      </div>
    </div>
  );
}

export { NovelCard };
export default ProjectCard;
