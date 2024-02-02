import { NavLink } from "react-router-dom";
import "./CartTotals.css";
import { ICart, ICartTotals } from "../../../types/types";

const CartTotals: React.FC<ICartTotals> = ({ goods }) => {
  const getSumPrice = (cartItems: ICart[]): number => {
    return cartItems.reduce((acc: number, item: ICart) => {
      const price = item.totalPrice || item.price;
      const sum = (item.buyAmount || 0) * +price;
      acc = acc + Number(sum.toFixed(3));
      return acc;
    }, 0);
  };

  return (
    <div className="cartTotalsContainer">
      <h2>cart totals</h2>
      <div>
        <div className="cartTotalsSubtotal cartTotalsFlex">
          <p>subtotal</p>
          <p>${getSumPrice(goods)}</p>
        </div>
        <div className="cartTotalsTotal cartTotalsFlex">
          <p>totla</p>
          <p>${getSumPrice(goods)}</p>
        </div>
      </div>
      <NavLink to={"/checkout"} className="checkoutLink">
        Check Out
      </NavLink>
    </div>
  );
};

export default CartTotals;
