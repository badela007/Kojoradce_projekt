import React from 'react';

export const PositionDetail = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className="position-detail">
      <h2 className="position-detail__label">{title}</h2>
      <img
        className="position-detail__image-container"
        src={imgSrc}
        alt={imgAlt}
      />
      <p className="postition-detail__text">{description}</p>
    </div>
  );
};
