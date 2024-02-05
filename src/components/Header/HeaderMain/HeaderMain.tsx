import HeaderButtonsBar from "../HeaderButtonsBar/HeaderButtonsBar";
import HeaderNav from "../HeaderNav/HeaderNav";

import HeaderMobileButton from "../HeaderMobileButton/HeaderMobileButton";
import "./HeaderMain.css";
import Modal from "../../Modal/Modal";
import ModalCartContain from "../../ModalCartContain/ModalCartContain";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import MobileMenu from "../MobileMenu/MobileMenu";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SearchField from "../SearchField/SearchField";
import ModalFavorite from "../ModalFavorite/ModalFavorite";

const HeaderMain = () => {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [visibleMobile, setVisibleMobile] = useState<boolean>(false);
  const [visibleSearchField, setVisibleSearchField] = useState<boolean>(false);
  const [visibleFavorite, setVisibleFavorite] = useState<boolean>(false);

  const cart = useAppSelector((state) => state.cart.goods);

  const toggleModalCart = () => {
    setVisibleCart((prev) => !prev);
    setVisibleMobile(false);
    setVisibleSearchField(false);
    setVisibleFavorite(false);
  };

  const toggleMobile = () => {
    setVisibleMobile((prev) => !prev);
    setVisibleCart(false);
    setVisibleSearchField(false);
    setVisibleFavorite(false);
  };

  const toggleSearchField = () => {
    setVisibleSearchField((prev) => !prev);
    setVisibleMobile(false);
    setVisibleCart(false);
  };

  const toggleFavorite = () => {
    setVisibleFavorite((prev) => !prev);
    setVisibleMobile(false);
    setVisibleCart(false);
    setVisibleSearchField(false);
  };

  return (
    <header className="header">
      <Modal visible={visibleCart} toggle={toggleModalCart}>
        <ModalCartContain onClick={toggleModalCart} />
      </Modal>
      <Modal visible={visibleMobile} toggle={toggleMobile}>
        <MobileMenu
          onClick={toggleMobile}
          itemsAmount={cart.length}
          isOpenCartModal={toggleModalCart}
          onToggleSearch={toggleSearchField}
        />
      </Modal>
      <Modal visible={visibleFavorite} toggle={toggleFavorite}>
        <ModalFavorite onClick={toggleFavorite} />
      </Modal>
      <div className="headerContainer">
        <HeaderLogo />
        {!visibleSearchField && <HeaderNav />}
        {visibleSearchField && <SearchField onClick={toggleSearchField} />}
        <HeaderButtonsBar
          onClick={toggleModalCart}
          onToggleSearch={toggleSearchField}
          onToggleFavorite={toggleFavorite}
          itemsAmount={cart.length}
          hidden={true}
        />
        <HeaderMobileButton onClick={toggleMobile} />
      </div>
    </header>
  );
};

export default HeaderMain;
