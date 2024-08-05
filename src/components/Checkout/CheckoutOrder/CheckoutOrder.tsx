import { nanoid } from 'nanoid';

import { getSumPrice } from '../../../helpers/getSumPrice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ICart } from '../../../types/types';
import PlaceOrderBlank from '../PlaceOrderBlank/PlaceOrderBlank';
import './CheckoutOrder.css';

interface IReactHookProps {
  register: any;
  errors: any;
}

const CheckoutOrder: React.FC<IReactHookProps> = ({ register, errors }) => {
  const cart = useAppSelector((state) => state.cart.goods);

  return (
    <div className="co-container">
      <div className="co-columnsTitle mc-c-flex">
        <p>Product</p>
        <p>Subtotal</p>
      </div>
      <ul className="co-cartList">
        {cart.map(({ title, buyAmount, price }: ICart) => (
          <li
            key={nanoid()}
            className="mc-c-flex"
          >
            <div className="co-itemDetails mc-c-flex">
              <p>{title}</p>
              <p>x</p>
              <p>{buyAmount}</p>
            </div>
            <p className="co-itemPrice">
              {(+price * (buyAmount || 0)).toFixed(2)}$
            </p>
          </li>
        ))}
      </ul>
      <div className="co-totalInfo mc-c-flex">
        <p>total</p>
        <p>{getSumPrice(cart)}$</p>
      </div>
      <PlaceOrderBlank
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default CheckoutOrder;
