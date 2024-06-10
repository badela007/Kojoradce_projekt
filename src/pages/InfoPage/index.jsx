import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const InfoPage = () => {
  return (
    <div className="container">
      <div className=".question__logo">
        <h1 className="infoHeader">Informace o kojeni</h1>
      </div>

      <div className="tecniqueButton">
        <Link to="/info-o-kojeni/technika">Správná technika kojení</Link>
      </div>

      <div className="positionsButton">
        <Link to="/info-o-kojeni/polohy">Kojící polohy</Link>
      </div>
    </div>
  );
};
