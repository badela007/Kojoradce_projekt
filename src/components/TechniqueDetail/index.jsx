import React from 'react';

export const TechniqueDetail = ({ title, description, images }) => {
  return (
    <div className="technique-detail">
      <h2>{title}</h2>
      <p>{description}</p>
      {images &&
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} image ${index + 1}`}
            className="technique-image"
          />
        ))}
    </div>
  );
};
