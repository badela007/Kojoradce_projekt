import './style.css';
import data from '../../json/decision_tree_2024-06-04.json';
import { useNavigate } from 'react-router-dom';

export const AnswerButton = ({ code }) => {
  console.log('code', code);
  const answer = data.find((answr) => answr.code === code);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/kojoradce/${code}`);
  };

  return (
    <div onClick={handleClick} className="answerButton">
      {answer.text}
    </div>
  );
};
