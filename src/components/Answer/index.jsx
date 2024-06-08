import './style.css';
import { Link } from 'react-router-dom';


export const Answer = ({link, text, backgroundColor, icon}) => {
    return (
        <Link to={link}>
        <button className="answer">
            <div className="answer__content">
             <div className="answer__content-icon">
                <img src='Vector.svg'></img>
             </div>
             <div className="answer__content-text">{text}</div>
</div>
        </button>
        </Link> 
    );
}


