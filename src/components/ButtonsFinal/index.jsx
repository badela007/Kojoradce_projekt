import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ButtonsFinal = ({ link, backgroundColor, icon }) => {
  const variant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className="buttonsFinal"
    >
      <Link to="/info-o-kojeni" target="_blank">
        <div className="answerFinal">Chci znát techniku kojení a polohy</div>
      </Link>
      <Link to="/feedback">
        <div className="answerFinal">Nic dalšího nepotřebuji</div>
      </Link>
      <Link to="/">
        <div className="answerFinal">Zkusit znovu</div>
      </Link>
    </motion.div>
  );
};
