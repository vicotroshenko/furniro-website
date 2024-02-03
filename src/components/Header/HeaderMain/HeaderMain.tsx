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


const HeaderMain = () => {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [visibleMobile, setVisibleMobile] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart.goods)

  const toggleModalCart = () => {
    setVisibleCart((prev) => !prev);
    setVisibleMobile(false);
  };

  const toggleMobile = () => {
    setVisibleMobile((prev) => !prev);
    setVisibleCart(false);
  };

  return (
    <header className="header">
      <Modal visible={visibleCart} toggle={toggleModalCart}>
        <ModalCartContain onClick={toggleModalCart} />
      </Modal>
      <Modal visible={visibleMobile} toggle={toggleMobile}>
        <MobileMenu onClick={toggleMobile} itemsAmount={cart.length} isOpenCartModal={toggleModalCart}/>
      </Modal>
      <div className="headerContainer">
        <HeaderLogo/>
        <HeaderNav />
        <HeaderButtonsBar onClick={toggleModalCart} itemsAmount={cart.length} hidden={true}/>
        <HeaderMobileButton onClick={toggleMobile} />
      </div>
    </header>
  );
};

export default HeaderMain;
