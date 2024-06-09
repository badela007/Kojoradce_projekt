import { useState } from "react";
import "./style.css";
import { Heart } from "./Heart";

export const Rating = ({ onRate, rating }) => {
  const handleRate = (value) => {
    onRate(value);
  };

  return (
    <div className="rating">
      <h2 className="rating__title"></h2>
      <div className="rating__hearts">
        <Heart value={1} onSelect={handleRate} glowing={rating >= 1} />
        <Heart value={2} onSelect={handleRate} glowing={rating >= 2} />
        <Heart value={3} onSelect={handleRate} glowing={rating >= 3} />
        <Heart value={4} onSelect={handleRate} glowing={rating >= 4} />
        <Heart value={5} onSelect={handleRate} glowing={rating >= 5} />
      </div>
    </div>
  );
};
