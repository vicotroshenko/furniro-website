import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

import { RoutKey } from '../../constants';
import logo from '../../images/svg/logo.svg';
import './NavigationScreen.css';

const NavigationScreen = () => {
  const { pathname } = useLocation();
  const currentPlace = pathname.slice(1, pathname.length);

  return (
    <section className="navigationScreenSection">
      <div className="navigationScreenContainer">
        <div className="blurBackContent">
          <div>
            <img
              src={logo}
              alt="logo of company"
            />
          </div>
          <h1>{currentPlace}</h1>
          <div className="navigationScreenHistory">
            <Link to={RoutKey.HOME}>home</Link>
            <IoIosArrowForward />
            <Link to={pathname}>{currentPlace}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationScreen;
