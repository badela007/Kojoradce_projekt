import React from 'react';

export const TechniqueDetail = ({ title, description, images }) => {
  return (
    <div className="technique-detail">
      <h2 className="technique-detail__label">{title}</h2>
      <p className="technique-detail__text">{description}</p>
      {images &&
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} image ${index + 1}`}
            className="technique-detail__image"
          />
        ))}
    </div>
  );
};
