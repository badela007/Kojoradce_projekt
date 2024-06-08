import './style.css';
import { Link } from 'react-router-dom';


export const Answer = ({link, backgroundColor, icon}) => {
    return (
<>
    <Link to="/info-o-kojeni"><div className="answer__content-text">Chci znát techniku kojení a polohy</div></Link> 
    <Link to="/kojoradce"><div className="answer__content-text">Nic dalšího nepotřebuji</div></Link> 
    <Link to="/kojoradce"><div className="answer__content-text">Zkusit znovu</div></Link> 
</>
    );
}



{/* <Link to="/">Hlavni</Link>
        <span> | </span>
        <Link to="/kojoradce">Kojorádce</Link>
        <span> | </span>
        <Link to="/info-o-kojeni">Info o kojení</Link>
        <span> | </span>
        <Link to="/laktacni-poradkyne">Laktační poradkyně</Link> */}
