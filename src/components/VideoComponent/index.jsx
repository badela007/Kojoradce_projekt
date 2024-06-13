import React from 'react';
import './style.css';

export const VideoComponent = ({ title, src }) => {
  return (
    <div>
      <h2 className="video__title">{title}</h2>
      <div className="video__responsive">
        <iframe
          width="560"
          height="315"
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </div>
  );
};
