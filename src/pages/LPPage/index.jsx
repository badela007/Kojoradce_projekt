import React from 'react';
import './style.css';

export const LPPage = () => {
  return (
    <div className="container">
      <div>
        <h1 className="infoHeader">Hledám laktační poradkyni</h1>
      </div>
      <div>
        <p>
          Na stránkách Laktační ligy naleznete seznam laktačních poradkyň podle
          místa bydliště.
        </p>
      </div>
      <div className="lpButton">
        <a href="https://www.kojeni.cz/podpora/seznam-laktacnich-poradcu/">
          Seznam LP
        </a>
      </div>
    </div>
  );
};
