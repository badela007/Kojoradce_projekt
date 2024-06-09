import { Link } from 'react-router-dom';

export const MenuItem = ({ url, text, onClosedMenu }) => {
  return (
    <Link to={url} className="menu-item" onClick={onClosedMenu}>
      {text}
    </Link>
  );
};
