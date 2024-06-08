import React from 'react';
import './style.css';
import { Question } from '../../components/Question';
import { AnswerButton } from '../../components/AnswerButton';

export const KojoradcePage = () => {
  return (
    <div className="container">
      <header>
        <div />
        <h1>Kojorádce</h1>
      </header>
      <main>
      <Question text="1. otazka z JSON"/>
      <AnswerButton text="1. odpoved z JSON" />
      <AnswerButton text="2. odpoved z JSON" />
      <AnswerButton text="3. odpoved z JSON" />
      
      </main>
      <footer>
        <p>Tady bude footer</p>
      </footer>
    </div>
  );
};
