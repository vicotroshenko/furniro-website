import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addOrder } from "../../redux/orders/operations";
import { getSumPrice } from "../../helpers/getSumPrice";
import { deleteCartItem } from "../../redux/cart/cartSlice";
import { ICart } from "../../types/types";
import CheckoutForms from "./CheckoutForms/CheckoutForms";
import CheckoutOrder from "./CheckoutOrder/CheckoutOrder";
import "./CheckoutMain.css";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart.goods);
  const ordersStutus = useAppSelector((state) => state.orders.status);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      addOrder({
        ...data,
        totalPrice: getSumPrice(cart).toString(),
        order: cart,
      })
    );
    if (ordersStutus === "success") {
      const ids = cart.reduce((acc: string[], item: ICart) => {
        acc = [...acc, item._id];
        return acc;
      }, []);

      dispatch(deleteCartItem([...ids]));
      navigate("/checkout/order");
    }
  };

  return (
    <section className="checkout-section">
      <form
        className="checkout-container mc-c-flex"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CheckoutForms register={register} errors={errors} />
        <CheckoutOrder register={register} errors={errors} />
      </form>
    </section>
  );
};

export default CheckoutMain;
