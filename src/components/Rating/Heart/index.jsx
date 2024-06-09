import { useState } from "react";
import "./style.css";

export const Heart = ({ value, onSelect, glowing }) => {

  const handleClick = () => {
    onSelect(value);
  };

  const heartClass = glowing ? "rating__heart rating__heart--on" : "rating__heart";

  return <div onClick={handleClick} className={heartClass}></div>;
};
