import "./style.css";

export const Question = ({ text }) => {
  return (
    <div className="question">
      <div className="question__logo"></div>
      <p
        dangerouslySetInnerHTML={{ __html: text }}
        className="question__content"
      ></p>
    </div>
  );
};
