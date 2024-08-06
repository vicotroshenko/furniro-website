import { memo } from 'react';
import { GrClose } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';

import { RoutKey, ViewParam } from '../../../constants';
import { createUrl } from '../../../helpers';
import HeaderButtonsBar from '../../Header/HeaderButtonsBar/HeaderButtonsBar';
import HeaderLogo from '../../Header/HeaderLogo/HeaderLogo';
import ModalLinks from '../../Header/ModalLinks/ModalLinks';
import './MobileMenu.css';

interface IMobileModal {
  onClick: () => void;
  itemsAmount?: number;
  isOpenCartModal: () => void;
  onToggleSearch?: () => void;
  onToggleFavorite?: () => void;
}

const MobileMenu: React.FC<IMobileModal> = memo(
  ({
    onClick,
    itemsAmount,
    isOpenCartModal,
    onToggleSearch,
    onToggleFavorite,
  }) => {
    const { pathname } = useLocation();

    return (
      <div className="mobilMenu-container">
        <div className="mobileMenu-top-container">
          <HeaderLogo />
          <button
            type="button"
            aria-label="close mobile menu button"
            className="mobile-button-close"
            onClick={onClick}
          >
            <GrClose />
          </button>
        </div>
        <nav className="mobil-nav">
          <ul
            className="mobil-navList"
            onClick={onClick}
          >
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
                to={createUrl({
                  view: ViewParam.GRID,
                  page: 1,
                  limit: 9,
                })}
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
        <HeaderButtonsBar
          onClick={isOpenCartModal}
          onToggleSearch={onToggleSearch}
          onToggleFavorite={onToggleFavorite}
          itemsAmount={itemsAmount}
          hidden={false}
        />
        <ModalLinks onClick={onClick} />
      </div>
    );
  }
);

export default MobileMenu;
