import HeaderButtonsBar from "../HeaderButtonsBar/HeaderButtonsBar";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderMobileButton from "../HeaderMobileButton/HeaderMobileButton";
import "./HeaderMain.css";
import Modal from "../../Modal/Modal";
import ModalCartContain from "../../Modal/ModalCartContain/ModalCartContain";
import { useState } from "react";
import MobileMenu from "../../Modal/MobileMenu/MobileMenu";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SearchField from "../SearchField/SearchField";
import ModalFavorite from "../../Modal/ModalFavorite/ModalFavorite";
import ModalNotification from "../../Modal/ModalNotification/ModalNotification";
import { useCartContext } from "../../../hooks/useCartContext";

const HeaderMain = () => {
  const [visible, setVisible] = useState<{[x: string]:boolean}>({
    cart:false,
    mobile: false,
    searchField:false,
    favorite: false,
  });

  const { cartState } = useCartContext();

  const toggle = (name:string) => {
    let visibleParams = {};
    for (const key in visible){
      if(visible.hasOwnProperty(key)){
        if(name === key){
          visibleParams = {...visibleParams, [key]: !visible[key]};
        } else {
          visibleParams = {...visibleParams, [key]: false}
        }
      }
    }
    setVisible(visibleParams);
  }


  return (
    <header className="header">
      <ModalNotification/>
      <Modal visible={visible.cart} toggle={()=> toggle("cart")}>
        <ModalCartContain onClick={()=> toggle("cart")} />
      </Modal>
      <Modal visible={visible.mobile} toggle={()=> toggle("mobile")}>
        <MobileMenu
          onClick={()=> toggle("mobile")}
          itemsAmount={cartState.goods.length}
          isOpenCartModal={()=> toggle("cart")}
          onToggleSearch={() => toggle("searchField")}
          onToggleFavorite={() => toggle("favorite")}
        />
      </Modal>
      <Modal visible={visible.favorite} toggle={() => toggle("favorite")}>
        <ModalFavorite onClick={() => toggle("favorite")} />
      </Modal>
      <div className="headerContainer">
        <HeaderLogo />
        {!visible.searchField && <HeaderNav />}
        {visible.searchField && <SearchField onClick={() => toggle("searchField")} />}
        <HeaderButtonsBar
          onClick={()=> toggle("cart")}
          onToggleSearch={() => toggle("searchField")}
          onToggleFavorite={()=> toggle("favorite")}
          itemsAmount={cartState.goods.length}
          hidden={true}
        />
        <HeaderMobileButton onClick={()=> toggle("mobile")} />
      </div>
    </header>
  );
};

export default HeaderMain;
