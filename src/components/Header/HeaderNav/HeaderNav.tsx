import { Link, useLocation } from 'react-router-dom';

import { RoutKey } from '../../../constants';
import './HeaderNav.css';

const HeaderNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <ul className="navList">
        <li>
          <Link
            to={RoutKey.HOME}
            className={pathname === RoutKey.HOME ? 'active' : ''}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to={RoutKey.SHOP + RoutKey.SHOP_GRID}
            className={pathname === RoutKey.SHOP ? 'active' : ''}
          >
            shop
          </Link>
        </li>
        <li>
          <Link
            to={RoutKey.CONTACTS}
            className={pathname === RoutKey.CONTACTS ? 'active' : ''}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
