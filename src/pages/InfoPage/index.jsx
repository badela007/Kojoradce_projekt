import React from "react";
import "./style.css";
import { Answer } from "../../components/Answer";

export const InfoPage = () => {
  return (
    <div className="container_info">
      <h1 className="infoHeader">Informace o kojeni</h1>

      <Answer
        link="/info-o-kojeni/technika"
        text="Správná technika kojení"
        imgSrc="img/technika.svg"
        backgroundColor="#5B3F5D"
      />
      <Answer
        link="/info-o-kojeni/polohy"
        text="Kojící polohy"
        imgSrc="img/polohy.svg"
        backgroundColor="#442A65"
      />
    </div>
  );
};
