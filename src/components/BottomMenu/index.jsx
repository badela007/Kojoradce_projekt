import { Link } from 'react-router-dom';
import './style.css';
import React, { useState } from 'react';

export const BottomMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="menu_bottom">
      <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
        <button
          className={`menu__btn ${menuOpened ? 'menu__btn--open' : ''}`}
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        ></button>
        <div className="menu__items">
          <Link to="/" className="menu-item">
            Kojorádce
          </Link>
          <Link to="/kojoradce/2" className="menu-item">
            Potřebuji poradit
          </Link>
          <Link to="/info-o-kojeni" className="menu-item">
            Informace o kojení
          </Link>
          <Link to="/laktacni-poradkyne" className="menu-item">
            Hledám laktační poradkyni
          </Link>
        </div>
      </div>
    </div>
  );
};
