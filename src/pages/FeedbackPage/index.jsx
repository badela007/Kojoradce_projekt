import React, { useState } from "react";
import "./style.css";
import { Rating } from "../../components/Rating";
import { Link } from "react-router-dom";

export const FeedbackPage = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzer36J_WZNMqZ9et3Ov1hrsytUFMXFIH1LORgkD2HCCO6yZ1r5Q5OkhgVWVAMH3qU7/exec";

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const [formIsVisible, setFormIsVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const requestBody = new FormData(e.target);
    fetch(scriptURL, { method: "POST", body: requestBody })
      .then(() => {
        setFormIsVisible(false);
      })
      .catch((error) => {
        alert("Error!", error.message);
      });
  };

  if (formIsVisible) {
    return (
      <div className="feedback_container">
        <form onSubmit={handleSubmit} className="feedback">
          <label className="form-title">
            Byly informace od Kojorádce pro vás užitečné? Zanechte nám vzkaz
            <Rating onRate={setRating} rating={rating} />
            <input
              id="rating-input"
              type="hidden"
              name="hodnoceni"
              value={rating}
            />
            <input
              id="msg-input"
              type="text"
              name="messageText"
              placeholder="  Sem napište vzkaz..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </label>

          <button
            className="btn"
            type="submit"
            disabled={isSubmitting || (message === "" && rating === 0)}
          >
            {isSubmitting ? "Odesílám..." : "Odeslat"}
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="feedbackSent_container">
        <div className="feedbackSent">
          <div className="feedbackSent-title">
            <p>Odesláno.</p>
            <p>Přeji krásný den a kojení zdar!</p>
          </div>
          <Link className="feedbackSent-toMain" to="/">
            <button className="feedbackSent-btn" type="button">
              Na hlavni
            </button>
          </Link>
        </div>
      </div>
    );
  }
};
