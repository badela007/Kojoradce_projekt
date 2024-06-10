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
          backgroundColor="#5B3F5D"
        />
        <Answer
          link="/info-o-kojeni"
          text="Hledám informace ke kojení"
          imgSrc="img/info-kojeni.svg"
          backgroundColor="#442A65"
        />
        <Answer
          link="/laktacni-poradkyne"
          text="Hledám laktační poradkyní"
          imgSrc="img/laktacni-poradkyne.svg"
          backgroundColor="#3B0A3F"
        />
      </main>
    </div>
  );
};
