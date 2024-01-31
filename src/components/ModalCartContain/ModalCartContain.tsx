import { BsBagX } from "react-icons/bs";
import "./ModalCartContain.css";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IoIosCloseCircle } from "react-icons/io";
import { ICart } from "../../types/types";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteCartItem } from "../../redux/cart/cartSlice";

interface IModalCartContainProps {
  onClick: () => void;
}

const ModalCartContain: React.FC<IModalCartContainProps> = ({ onClick }) => {
  const cart = useAppSelector((state) => state.cart.goods);
  const dispatch = useAppDispatch();

  const getSumPrice = (goods: ICart[]) => {
    const sum = goods.reduce((acc: number, item: ICart) => {
      acc = acc + +item.price;
      return acc;
    }, 0);
    return sum;
  };

  const deleteItemFromCart = (id: string) => {
    dispatch(deleteCartItem({ id }));
  };

  return (
    <>
      <div className="mc-c-container">
        <div className="mc-c-top mc-c-flex">
          <h2>shopping cart</h2>
          <button type="button" onClick={onClick}>
            <BsBagX style={{ width: "100%", height: "100%" }} />
          </button>
        </div>
        <ul className="mc-c-list">
          {cart.map(({ pictures, title, price, buyAmoutn, _id }: ICart) => (
            <li className="mc-c-item mc-c-flex" key={nanoid()}>
              <div className="mc-c-imageContainer">
                <img src={pictures[0]} alt={title} className="image" />
              </div>
              <div className="mc-c-itemInfo">
                <p>{title}</p>
                <div className="mc-c-flex">
                  <p>{buyAmoutn}</p>
                  <p>x</p>
                  <p className="mc-c-price">${price}</p>
                </div>
              </div>
              <button type="button" onClick={() => deleteItemFromCart(_id)}>
                <IoIosCloseCircle
                  style={{ width: "20px", height: "20px", fill: "#9F9F9F" }}
                />
              </button>
            </li>
          ))}
        </ul>
        <div className="mc-c-sum mc-c-flex">
          <p>Subtotal</p>
          <p>${getSumPrice(cart).toFixed(2)}</p>
        </div>
      </div>
      <div className="mc-c-bottomLinks mc-c-flex">
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/checkout"}>Checkout</NavLink>
        <NavLink to={"/comparison"}>Comparison</NavLink>
      </div>
    </>
  );
};

export default ModalCartContain;
