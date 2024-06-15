import "./style.css";
import data from "../../json/decision_tree_2024-06-04.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const AnswerButton = ({ code }) => {
  const variant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const answer = data.find((answr) => answr.code === code);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/kojoradce/${code}`);
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      onClick={handleClick}
      className="answerButton"
    >
      {answer.text}
    </motion.div>
  );
};
