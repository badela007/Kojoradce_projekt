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

  const feedbackData = {
    messageText: message,
    hodnoceni: rating,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedbackData);
    const requestBody = new FormData(e.target);
    fetch(scriptURL, { method: "POST", body: requestBody })
      .then((response) => {
        alert("Odeslano", response);
        setFormIsVisible(false);
      })
      .catch((error) => {
        alert("Error!", error.message);
      });
  };

  console.log(rating);

  if (formIsVisible) {
    return (
      <div className="feedback_container">
        <form onSubmit={handleSubmit} className="feedback">
          <label>
            Byli informace od Kojorádce od Kojorádce pro váas užitečné? Zanechte
            nám zvkaz
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
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </label>

          <button type="submit" disabled={message === "" && rating === 0}>
            Odeslat
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="send_msg">
        Odeslano. Přeji krásný den a kojení zdar!
        <Link to="/">
          <button className="answerButton" type="button">
            Na hlavni
          </button>
        </Link>
      </div>
    );
  }
};
