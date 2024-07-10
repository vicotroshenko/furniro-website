import { Link } from 'react-router-dom';

import logo from '../../../images/svg/logo.svg';
import './HeaderLogo.css';

const HeaderLogo = () => {
  return (
    <Link
      to={'/'}
      style={{ textDecoration: 'none', color: 'inherit' }}
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
