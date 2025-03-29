import { useState } from "react";
import NovelData from "../assets/json/novels.json";
import { NovelCard } from "../components/Card";
import "../assets/styles/novels.css";

function Novels() {
  const [Novelas] = useState(NovelData.Novelas || []);
  return (
    <div>
      <h1 className="text-h1">Novelas Traducidas Por Mí</h1>
      <div className="novels">
        {Novelas.map((data, index) => (
          <NovelCard
            key={index}
            title={data.title}
            background={data.background}
            andURL={data.andURL}
            pcURL={data.pcURL}
            ofURL={data.ofURL}
          />
        ))}
      </div>
      <div className="novels">
        <a
          type="button"
          className="btn btn-primary"
          href="https://1024terabox.com/s/1L-GAGHOrCfQvChpL_4O9Zw"
          target="_blank"
        >
          Novelas Traducidas
        </a>
      </div>
    </div>
  );
}

export default Novels;
