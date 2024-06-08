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
  console.log('test', question);

  const answers = question.option_codes.map((code) => {
    const answer = data.find((answr) => answr.code === code);
    // console.log(answer.text);
  });

  const answer = data.find(
    (answr) =>
      answr.code ===
      question.option_codes.map((code) => {
        code;
      }),
  );
  // console.log(answer);
  console.log(question.text_question);

  return (
    <div className="container">
      <header>
        <div />
        <h1>Kojorádce</h1>
      </header>
      <main>
        <Question text={question.text_question} />

        {question.option_codes.map((code) => {
          console.log('kod', code);
          return <AnswerButton code={code} />;
        })}
        {question.option_codes.length === 0 ? <div>Ahoj</div> : null}
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};
