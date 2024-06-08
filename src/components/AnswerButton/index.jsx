import './style.css';

export const AnswerButton = ({ text }) => {
    return (
      <div className="answerButton">
        <button className="aanswerButton__content">{text}</button>
      </div>
    );
  };