import React from 'react';
import './style.css';
import { Question } from '../../components/Question';
import { AnswerButton } from '../../components/AnswerButton';
import data from '../../json/decision_tree_2024-06-04.json';
import { useParams } from 'react-router-dom';

export const KojoradcePage = () => {
  const { code } = useParams();
  console.log(code);

  const question = data.find((qstn) => qstn.code === Number(code));
  console.log(question);

  const answers = question.option_codes.map((code) => {
    const answer = data.find((answr) => answr.code === code);
  });
  console.log(answers);

  /*const answer = data.find((answr) => answr.code === question.option_codes[1]);
  console.log(answer.text);*/

  return (
    <div className="container">
      <header>
        <div />
        <h1>Kojorádce</h1>
      </header>
      <main>
        <Question text={question.text} />
        <h3>{question.option_codes}</h3>
      </main>
      <footer>
        <p>Tady bude footer</p>
      </footer>
    </div>
  );
};
