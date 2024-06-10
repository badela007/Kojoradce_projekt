import React from "react";
import "./style.css";
import { Question } from "../../components/Question";
import { Answer } from "../../components/Answer";
import { BottomMenu } from "../../components/BottomMenu";

export const HomePage = () => {
  return (
    <div className="container">
      <header></header>
      <main>
        <Question text="Zdravím, jsem KOJORÁDCE. Váš průvodce kojením. S čím mohu pomoci?" />
        <Answer
          link="/kojoradce/2"
          text="Mám potíže. Potřebuji poradit"
          imgSrc="img/chat-kojoradce.svg"
        />
        <Answer
          link="/info-o-kojeni"
          text="Hledám informace ke kojení"
          imgSrc="img/info-kojeni.svg"
        />
        <Answer
          link="/laktacni-poradkyne"
          text="Hledám laktační poradkyní"
          imgSrc="img/laktacni-poradkyne.svg"
        />
      </main>
    </div>
  );
};
