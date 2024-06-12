import { Link } from "react-router-dom";
import "./style.css";
export const FeedbackSentConfirm = () => {
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
};
