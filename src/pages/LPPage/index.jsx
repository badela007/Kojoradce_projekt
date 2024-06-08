import React from 'react';
import './style.css';

export const LPPage = () => {
  return (
    <div className="container">
      <header>
        <div />
        <h1>Hledám laktační poradkyni</h1>
      </header>
      <main>
        <p>
          Na stránkách Laktační ligy najdete seznam laktačních poradkyň podle
          místa bydliště.
        </p>
        <a href="https://www.kojeni.cz/podpora/seznam-laktacnich-poradcu/">
          Seznam LP
        </a>
      </main>
      <footer>
        <p>Tady bude footer</p>
      </footer>
    </div>
  );
};
