import React from "react";
import "./style.css";
import { Question } from "../../components/Question";
import { Answer } from "../../components/Answer";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <header></header>
      <main>
        <Question text="Zdravím, jsem KOJORÁDCE. Váš průvodce kojením. S čím mohu pomoci?" />
        <Answer
          link="/kojoradce/2"
          text="Potřebuji hned poradit"
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
