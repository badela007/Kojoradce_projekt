import React from 'react';

export const PositionDetail = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className="position-detail">
      <h2>{title}</h2>
      <img src={imgSrc} alt={imgAlt} />
      <p>{description}</p>
    </div>
  );
};
