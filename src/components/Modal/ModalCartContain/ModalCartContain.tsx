import { BsBagX } from "react-icons/bs";
import { nanoid } from "nanoid";
import { IoIosCloseCircle } from "react-icons/io";
import { ICart, IModalCartContainProps } from "../../../types/types";
import ModalLinks from "../../Header/ModalLinks/ModalLinks";
import { getSumPrice } from "../../../helpers/getSumPrice";
import "./ModalCartContain.css";
import { Tooltip } from "@mui/material";
import { useCartContext } from "../../../hooks/useCartContext";

const ModalCartContain: React.FC<IModalCartContainProps> = ({ onClick }) => {
  const { cartState, setCartState } = useCartContext();

  const deleteItemFromCart = (id: string) => {
    const goods = cartState.goods.filter(item => item._id !== id);
    setCartState({goods});
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
          {cartState.goods.map(({ pictures, title, price, buyAmount, _id }: ICart) => (
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
          <p>${getSumPrice(cartState.goods).toFixed(2)}</p>
        </div>
      </div>
      <ModalLinks onClick={onClick} />
    </>
  );
};

export default ModalCartContain;
