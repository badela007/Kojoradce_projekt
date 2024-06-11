import './style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MenuItem } from '../MenuItem';

const menuLinks = [
  {
    url: '/',
    text: 'Kojorádce',
  },
  {
    url: '/kojoradce/2',
    text: 'Potřebuji poradit',
  },
  {
    url: '/info-o-kojeni',
    text: 'Informace o kojení',
  },
  {
    url: '/laktacni-poradkyne',
    text: 'Hledám laktační poradkyni',
  },
];

export const BottomMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();
  const hideComponent = location.pathname === '/';

  const onClickHideMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <div className="spacer"></div>
      <div className="menu_bottom">
        <div
          className="back"
          onClick={() => navigate(-1)}
          style={{ display: hideComponent ? 'none' : 'flex' }}
        >
          <button className="back_btn"></button>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        >
          <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
            <button
              className={`menu__btn ${menuOpened ? 'menu__btn--open' : ''}`}
            ></button>
            <div className="menu__items">
              {menuLinks.map((link, index) => {
                return (
                  <MenuItem
                    url={link.url}
                    text={link.text}
                    key={index}
                    onClosedMenu={onClickHideMenu}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
