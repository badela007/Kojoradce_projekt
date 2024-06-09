import React, { useState } from "react";
import "./style.css";
import { Rating } from "../../components/Rating";

export const FeedbackPage = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzer36J_WZNMqZ9et3Ov1hrsytUFMXFIH1LORgkD2HCCO6yZ1r5Q5OkhgVWVAMH3qU7/exec";

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const feedbackData = {
    messageText: message,
    hodnoceni: rating,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedbackData);

    const requestBody = new FormData(e.target);
    fetch(scriptURL, { method: "POST", body: requestBody })
      // .then((response) => {
      //   alert("Odeslano", response);
      // })
      .catch((error) => {
        alert("Error!", error.message);
      });
  };

  return (
    <>
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
            <input id="msg-input" type="text" name="messageText" />
          </label>

          <button disabled={true} type="submit">
            Odeslat
          </button>
        </form>
      </div>
    </>
  );
};
