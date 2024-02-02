import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./HeaderButtonsBar.css";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import ModalCartContain from "../../ModalCartContain/ModalCartContain";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Badge } from "@mui/material";

const HeaderButtonsBar = () => {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart.goods)

  const toggleModalCart = () => {
    setVisibleCart((prev) => !prev);
  };

  return (
    <>
      <Modal visible={visibleCart} toggle={toggleModalCart}>
        <ModalCartContain onClick={toggleModalCart} />
      </Modal>
      <div className="headerButtons">
        <button type="button">
          <TbUserExclamation style={{ width: "100%", height: "100%" }} />
        </button>
        <button type="button">
          <CiSearch style={{ width: "100%", height: "100%" }} />
        </button>
        <button type="button">
          <FaRegHeart style={{ width: "100%", height: "100%" }} />
        </button>
        <button type="button" onClick={toggleModalCart} name="cart-icon">
        <Badge badgeContent={cart.length} color="primary" sx={{width: "100%", heigth: "100%"}}>
          <MdOutlineShoppingCart style={{ width: "100%", height: "100%" }} />
        </Badge>
        </button>
      </div>
    </>
  );
};

export default HeaderButtonsBar;
