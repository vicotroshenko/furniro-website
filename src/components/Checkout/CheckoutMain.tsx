import CheckoutForms from "./CheckoutForms/CheckoutForms";
import CheckoutOrder from "./CheckoutOrder/CheckoutOrder";
import "./CheckoutMain.css";
import { useForm, SubmitHandler } from "react-hook-form";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert("Your order is being processed");
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
