import './style.css';
import { Link } from 'react-router-dom';

export const Answer = ({ link, text, backgroundColor, imgSrc }) => {
  return (
    <Link to={link}>
      <button style={{ backgroundColor }} className="answer">
        <div className="answer__content">
          <div className="answer__content-icon">
            <img className="icon" src={imgSrc} />
          </div>
          <div className="answer__content-text">{text}</div>
        </div>
      </button>
    </Link>
  );
};
