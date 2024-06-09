import { Link } from 'react-router-dom';
import './style.css';
import React, { useState } from 'react';

export const BottomMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
      <button
        className={`menu__btn ${menuOpened ? 'menu__btn--open' : ''}`}
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
      ></button>
      <div className="menu__items">
        <Link to="/" text="Kojorádce" />
        <Link to="/kojoradce/2" text="Potřebuji poradit" />
        <Link to="/info-o-kojeni" text="Informace o kojení" />
        <Link to="/laktacni-poradkyne" text="Hledám laktační poradkyni" />
      </div>
    </div>
  );
};
