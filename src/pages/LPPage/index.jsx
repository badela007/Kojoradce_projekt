import React from "react";
import "./style.css";

export const LPPage = () => {
  return (
    <div className="consultant_container">
      <div className="consultant">
        <h1 className="consultant__heading">
          Najděte svou laktační poradkyni podle místa bydliště
        </h1>

        <div>
          <div className="consultant__text">
            Seznam laktačních poradkyň najdete na stránkách{" "}
            <a
              className="consultant__link"
              href="https://www.kojeni.cz/podpora/seznam-laktacnich-poradcu/"
            >
              Laktační ligy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};
