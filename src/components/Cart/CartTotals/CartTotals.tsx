import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { RoutKey } from '../../../constants';
import { getSumPrice } from '../../../helpers/getSumPrice';
import { ICart } from '../../../types/types';
import './CartTotals.css';

interface ICartTotals {
  goods: ICart[];
}

const CartTotals: React.FC<ICartTotals> = memo(({ goods }) => {
  const sumPrice = getSumPrice(goods);
  return (
    <div className="cartTotalsContainer">
      <h2>cart totals</h2>
      <div>
        <div className="cartTotalsSubtotal cartTotalsFlex">
          <p>subtotal</p>
          <p>{sumPrice} $</p>
        </div>
        <div className="cartTotalsTotal cartTotalsFlex">
          <p>total</p>
          <p>{sumPrice} $</p>
        </div>
      </div>
      <NavLink
        to={RoutKey.CHECKOUT}
        className="checkoutLink"
      >
        Check Out
      </NavLink>
    </div>
  );
});

export default CartTotals;
