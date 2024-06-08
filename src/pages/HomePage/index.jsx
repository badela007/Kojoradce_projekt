import React from 'react';
import './style.css';
import { Question } from '../../components/Question';
import { Answer } from '../../components/Answer';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        
        <h1>Kojorádce</h1>
      </header>
      <main>

        <Question />
        <Answer />
        <Answer />
        <Answer />



      </main>
      <footer>
        {/* <p>Tady bude footer</p> */}
      </footer>
    </div>
  );
};
