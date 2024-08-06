import { useCallback, useState } from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';
import MobileMenu from '../../Modal/MobileMenu/MobileMenu';
import Modal from '../../Modal/Modal';
import ModalCartContain from '../../Modal/ModalCartContain/ModalCartContain';
import ModalFavorite from '../../Modal/ModalFavorite/ModalFavorite';
import ModalNotification from '../../Modal/ModalNotification/ModalNotification';
import HeaderButtonsBar from '../HeaderButtonsBar/HeaderButtonsBar';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderMobileButton from '../HeaderMobileButton/HeaderMobileButton';
import HeaderNav from '../HeaderNav/HeaderNav';
import SearchField from '../SearchField/SearchField';
import './HeaderMain.css';

enum ModalToggleType {
  CART = 'cart',
  MOBILE = 'mobile',
  SEARCH_FIELD = 'searchField',
  FAVORITE = 'favorite',
}

const initialState: Record<ModalToggleType, boolean> = {
  cart: false,
  mobile: false,
  searchField: false,
  favorite: false,
};

const HeaderMain = () => {
  const [visible, setVisible] =
    useState<Record<ModalToggleType, boolean>>(initialState);

  const cart = useAppSelector((state) => state.cart.goods);

  const toggle = useCallback(
    (name: ModalToggleType) =>
      setVisible({ ...initialState, [name]: !visible[name] }),
    [visible]
  );

  return (
    <header className="header">
      <ModalNotification />
      <Modal
        visible={visible.cart}
        toggle={() => toggle(ModalToggleType.CART)}
      >
        <ModalCartContain onClick={() => toggle(ModalToggleType.CART)} />
      </Modal>
      <Modal
        visible={visible.mobile}
        toggle={() => toggle(ModalToggleType.MOBILE)}
      >
        <MobileMenu
          onClick={() => toggle(ModalToggleType.MOBILE)}
          itemsAmount={cart.length}
          isOpenCartModal={() => toggle(ModalToggleType.CART)}
          onToggleSearch={() => toggle(ModalToggleType.SEARCH_FIELD)}
          onToggleFavorite={() => toggle(ModalToggleType.FAVORITE)}
        />
      </Modal>
      <Modal
        visible={visible.favorite}
        toggle={() => toggle(ModalToggleType.FAVORITE)}
      >
        <ModalFavorite onClick={() => toggle(ModalToggleType.FAVORITE)} />
      </Modal>
      <div className="headerContainer">
        <HeaderLogo />
        {!visible.searchField && <HeaderNav />}
        {visible.searchField && (
          <SearchField onClick={() => toggle(ModalToggleType.FAVORITE)} />
        )}
        <HeaderButtonsBar
          onClick={() => toggle(ModalToggleType.CART)}
          onToggleSearch={() => toggle(ModalToggleType.SEARCH_FIELD)}
          onToggleFavorite={() => toggle(ModalToggleType.FAVORITE)}
          itemsAmount={cart.length}
          hidden={true}
        />
        <HeaderMobileButton onClick={() => toggle(ModalToggleType.MOBILE)} />
      </div>
    </header>
  );
};

export default HeaderMain;
