import { NavLink } from 'react-router-dom';

import { getSumPrice } from '../../../helpers/getSumPrice';
import { ICart } from '../../../types/types';
import './CartTotals.css';

interface ICartTotals {
  goods: ICart[];
}

const CartTotals: React.FC<ICartTotals> = ({ goods }) => {
  return (
    <div className="cartTotalsContainer">
      <h2>cart totals</h2>
      <div>
        <div className="cartTotalsSubtotal cartTotalsFlex">
          <p>subtotal</p>
          <p>{getSumPrice(goods)} $</p>
        </div>
        <div className="cartTotalsTotal cartTotalsFlex">
          <p>totla</p>
          <p>{getSumPrice(goods)} $</p>
        </div>
      </div>
      <NavLink
        to={'/checkout'}
        className="checkoutLink"
      >
        Check Out
      </NavLink>
    </div>
  );
};

export default CartTotals;
