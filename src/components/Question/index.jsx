import './style.css';


export const Question = ({text}) => {
    return ( 
    <div className="question">
        <div className="question__logo">
        </div>
            <p className="question__content">
                {text}
            </p>
    </div>
);
}