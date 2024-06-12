import React from 'react';
import './style.css';

export const PositionDetail = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <>
      <div className="positions__page-divider">
        <img src="/img/line.svg"></img>
      </div>

      <div className="position-detail">
        <h3 className="position-detail__label">{title}</h3>
        <div className="position-detail__image-container">
          <img className="position-detail__image" src={imgSrc} alt={imgAlt} />
        </div>
        <p className="postition-detail__text">{description}</p>
      </div>
    </>
  );
};
