import React from 'react';
import './style.css';

export const TechniqueDetail = ({ title, description, images }) => {
  return (
    <div className="technique-detail">
      <h2 className="technique-detail__label">{title}</h2>
      <p className="technique-detail__text">{description}</p>
      {images &&
        images.map((image, index) => (
          <div className="tecnique-detail__image-container">
            <img
              key={index}
              src={image}
              alt={`${title} image ${index + 1}`}
              className="technique-detail__image"
            />
          </div>
        ))}
    </div>
  );
};
