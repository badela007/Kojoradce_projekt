import React from "react";
import "./style.css";
import { Answer } from "../../components/Answer";

export const InfoPage = () => {
  return (
    <div className="container">
      <div className=".question__logo">
        <h1 className="infoHeader">Informace o kojeni</h1>
      </div>

      <Answer
        link="/info-o-kojeni/technika"
        text="Správná technika kojení"
        imgSrc="img/technika.svg"
      />
      <Answer
        link="/info-o-kojeni/polohy"
        text="Kojící polohy"
        imgSrc="img/polohy.svg"
      />
    </div>
  );
};
