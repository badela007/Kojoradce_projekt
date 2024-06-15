import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Answer = ({ link, text, backgroundColor, imgSrc }) => {
  const variant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div variants={variant} initial="hidden" animate="visible">
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
    </motion.div>
  );
};
