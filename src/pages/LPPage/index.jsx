import React from "react";
import "./style.css";

export const LPPage = () => {
  return (
    <div className="consultant">
      <div>
        <h1 className="consultant__heading">
          Najděte svou laktační poradkyni podle místa bydliště
        </h1>
      </div>
      <div>
        <p className="consultant__text">
          Seznam laktačních poradkyň najdete na stránkách .
        </p>
      </div>
      <div className="lpLink">
        <a
          className="consultant__link"
          href="https://www.kojeni.cz/podpora/seznam-laktacnich-poradcu/"
        >
          Laktační ligy
        </a>
      </div>
    </div>
  );
};
