import { useState } from "react";
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

interface FriendProps {
  image: string;
  name: string;
  links: { text: string; link: string }[];
}

function ProjectCard(props: Props) {
  const { title, background, state, description, link } = props;
  return (
    <div className="card card-project mb-3">
      <img
        src={background}
        alt={title}
        loading="lazy"
        className="card-img-top"
      />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <span className="text-body-secondary">{state}</span>
        <p className="card-text">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-project-link"
        >
          Ver Proyecto
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

function FriendCard(props: FriendProps) {
  const { image, name, links } = props;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="card card-friend"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered ? (
        <>
          <img
            src={image}
            className="card-img-top card-friend-img"
            alt={name}
          />
        </>
      ) : (
        <>
          <div className="friend-hovered">
            <div className="friend-content">
              <img src={image} />
            </div>
            <div className="friend-content">
              <h1>{name}</h1>
              <div className="friend-buttons">
                {links.length > 0 ? (
                  links.map((links, index) => (
                    <a
                      key={index}
                      href={links.link}
                      className="btn btn-primary btn-sm m-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {links.text}
                    </a>
                  ))
                ) : (
                  <p className="text-muted">Sin redes disponibles</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export { NovelCard, FriendCard, ProjectCard };
