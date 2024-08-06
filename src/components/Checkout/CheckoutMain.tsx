import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { RoutKey, Status } from '../../constants';
import { getSumPrice } from '../../helpers/getSumPrice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { deleteCartItem } from '../../redux/cart/cartSlice';
import { addOrder } from '../../redux/orders/operations';
import { ICart } from '../../types/types';
import CheckoutForms from './CheckoutForms/CheckoutForms';
import './CheckoutMain.css';
import CheckoutOrder from './CheckoutOrder/CheckoutOrder';

type Inputs = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  region: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
  additional: string;
  orderType: string;
};

const CheckoutMain = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart.goods);
  const ordersStatus = useAppSelector((state) => state.orders.status);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      dispatch(
        addOrder({
          ...data,
          totalPrice: getSumPrice(cart).toString(),
          order: cart,
        })
      );
      if (ordersStatus === Status.success) {
        const ids = cart.reduce((acc: string[], item: ICart) => {
          acc = [...acc, item._id];
          return acc;
        }, []);

        dispatch(deleteCartItem([...ids]));
        navigate(RoutKey.CHECKOUT_ORDER);
      }
    },
    [cart, ordersStatus, dispatch, navigate]
  );

  return (
    <section className="checkout-section">
      <form
        className="checkout-container mc-c-flex"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CheckoutForms
          register={register}
          errors={errors}
        />
        <CheckoutOrder
          register={register}
          errors={errors}
        />
      </form>
    </section>
  );
};

export default CheckoutMain;
