import './style.css';



export const Answer = ({link, text, backgroundColor, icon}) => {
    return (
        <button className="answer">
            <div className="answer__content">
             <div className="answer__content-icon">
                <img src='Vector.svg'></img>
             </div>
             <div className="answer__content-text">Mám potíže. 
Potřebuju poradit</div>
</div>
        </button>
    );
}


