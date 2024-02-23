import { BsBagX } from "react-icons/bs";
import { nanoid } from "nanoid";
import { IoIosCloseCircle } from "react-icons/io";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { ICart, IModalCartContainProps } from "../../../types/types";
import { deleteCartItem } from "../../../redux/cart/cartSlice";
import ModalLinks from "../../Header/ModalLinks/ModalLinks";
import { getSumPrice } from "../../../helpers/getSumPrice";
import "./ModalCartContain.css";
import { Tooltip } from "@mui/material";

const ModalCartContain: React.FC<IModalCartContainProps> = ({ onClick }) => {
  const cart = useAppSelector((state) => state.cart.goods);
  const dispatch = useAppDispatch();

  const deleteItemFromCart = (id: string) => {
    dispatch(deleteCartItem([ id ]));
  };

  return (
    <>
      <div className="mc-c-container">
        <div className="mc-c-top mc-c-flex">
          <h2>shopping cart</h2>
          <Tooltip title="Close" placement="bottom" arrow enterDelay={500}>
            <button type="button" onClick={onClick}>
              <BsBagX style={{ width: "100%", height: "100%" }} />
            </button>
          </Tooltip>
        </div>
        <ul className="mc-c-list">
          {cart.map(({ pictures, title, price, buyAmount, _id }: ICart) => (
            <li className="mc-card-item mc-c-flex" key={nanoid()}>
              <div className="mc-c-imageContainer">
                <img src={pictures[0]} alt={title} className="image" />
              </div>
              <div className="mc-c-itemInfo">
                <p>{title}</p>
                <div className="mc-c-flex">
                  <p>{buyAmount}</p>
                  <p>x</p>
                  <p className="mc-c-price">${price}</p>
                </div>
              </div>
              <Tooltip title="Delete" placement="bottom" arrow enterDelay={500}>
                <button type="button" onClick={() => deleteItemFromCart(_id)}>
                  <IoIosCloseCircle
                    style={{ width: "20px", height: "20px", fill: "#9F9F9F" }}
                  />
                </button>
              </Tooltip>
            </li>
          ))}
        </ul>
        <div className="mc-c-sum mc-c-flex">
          <p>Subtotal</p>
          <p>${getSumPrice(cart).toFixed(2)}</p>
        </div>
      </div>
      <ModalLinks onClick={onClick} />
    </>
  );
};

export default ModalCartContain;
