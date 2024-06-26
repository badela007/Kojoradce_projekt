import React, { useEffect } from 'react';
import './style.css';
import { Question } from '../../components/Question';
import { AnswerButton } from '../../components/AnswerButton';
import data from '../../json/decision_tree_2024-06-04.json';
import { useParams } from 'react-router-dom';
import { ButtonsFinal } from '../../components/ButtonsFinal';

export const KojoradcePage = () => {
  const { code } = useParams();

  const question = data.find((qstn) => qstn.code === Number(code));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [code, question]);

  return (
    <div className="container">
      <main>
        <Question text={question.text_question} />

        {question.option_codes.map((code) => {
          return <AnswerButton code={code} />;
        })}
        {question.option_codes.length === 0 ? <ButtonsFinal /> : null}
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};
