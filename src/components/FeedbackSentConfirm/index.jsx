import { Link } from 'react-router-dom';
import './style.css';
export const FeedbackSentConfirm = () => {
  return (
    <>
      <div className="feedbackSent_container">
        <div className="feedbackSent-title">
          <p>Odesláno.</p>
          <p>Přeji krásný den a kojení zdar!</p>
        </div>
      </div>
      <div className="images_container">
        <div className="image_one">
          <img src="img/boobs_1.svg"></img>
        </div>
        <div className="image_two">
          <img src="img/boobs_2.svg"></img>
        </div>
        <div className="image_three">
          <img src="img/boobs_3.svg"></img>
        </div>
      </div>
      <Link className="feedbackSent-toMain" to="/" type="button">
        Na hlavní stránku
      </Link>
    </>
  );
};
