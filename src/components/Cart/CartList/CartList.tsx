import { nanoid } from 'nanoid';
import { useCallback } from 'react';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { deleteCartItem } from '../../../redux/cart/cartSlice';
import { ICart } from '../../../types/types';
import CartLabel from '../CartLabel/CartLabel';
import CartPageItem from '../CartPageItem/CartPageItem';
import CartTotals from '../CartTotals/CartTotals';
import './CartList.css';

const CartList = () => {
  const cart = useAppSelector((state) => state.cart.goods);
  const dispatch = useAppDispatch();

  const handleDeleteItem = (id: string) => dispatch(deleteCartItem({ id }));

  const getTotalPrice = useCallback(
    (buyAmount: number, price: string) =>
      (buyAmount * +price).toFixed(2).toString(),
    []
  );

  return (
    <section className="cartListSection">
      <div className="cartListContainer mc-c-flex">
        <div>
          <CartLabel />
          <div className="cartList">
            {cart.map(
              ({ title, price, pictures, buyAmount = 0, _id }: ICart) => (
                <CartPageItem
                  id={_id}
                  picture={pictures[0]}
                  title={title}
                  buyAmount={+buyAmount}
                  totalPrice={getTotalPrice(buyAmount, price)}
                  price={price}
                  onClick={() => handleDeleteItem(_id)}
                  key={nanoid()}
                />
              )
            )}
          </div>
        </div>
        <CartTotals goods={cart} />
      </div>
    </section>
  );
};

export default CartList;
