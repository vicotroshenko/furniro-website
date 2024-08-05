import { Link } from 'react-router-dom';

import { RoutKey } from '../../../constants';
import logo from '../../../images/svg/logo.svg';
import './HeaderLogo.css';

const HeaderLogo = () => {
  return (
    <Link
      to={RoutKey.HOME}
      className="headerLogo_link"
    >
      <div className="headerLogo">
        <div>
          <img
            src={logo}
            alt="logo"
          />
        </div>
        <p>furniro</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
