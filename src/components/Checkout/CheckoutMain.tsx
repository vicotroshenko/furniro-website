import CheckoutForms from "./CheckoutForms/CheckoutForms";
import CheckoutOrder from "./CheckoutOrder/CheckoutOrder";
import "./CheckoutMain.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { getSumPrice } from "../../helpers/getSumPrice";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import { useOrderContext } from "../../hooks/useOrderContext";
import { addOrder } from "../../api/orders";

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

  const navigate = useNavigate();
  const { cartState, setCartState } = useCartContext();
  const { setOrderState } = useOrderContext();

  const cart = cartState.goods;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setOrderState(prev => ({...prev, status: "success"}));

    const response = await addOrder({...data, totalPrice: getSumPrice(cart).toString(), order: cart});
    console.log('response checkoutMain: ', response);

    if(response){
      setOrderState({orders: response, status: "success"})
      setCartState({goods:[]});
      navigate("/checkout/order");
    } else{
      setOrderState(prev => ({...prev, status: "error"}));
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
