import "./style.css";
import { Link } from "react-router-dom";

export const ButtonsFinal = ({ link, backgroundColor, icon }) => {
  return (
    <div className="buttonsFinal">
      <Link to="/info-o-kojeni">
        <div className="answerFinal">Chci znát techniku kojení a polohy</div>
      </Link>
      <Link to="/feedback">
        <div className="answerFinal">Nic dalšího nepotřebuji</div>
      </Link>
      <Link to="/">
        <div className="answerFinal">Zkusit znovu</div>
      </Link>
    </div>
  );
};
