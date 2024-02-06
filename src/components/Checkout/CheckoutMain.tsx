import CheckoutForms from "./CheckoutForms/CheckoutForms";
import CheckoutOrder from "./CheckoutOrder/CheckoutOrder";
import "./CheckoutMain.css";

const CheckoutMain = () => {
  return (
    <section className="checkout-section">
      <div className="checkout-container mc-c-flex">
        <CheckoutForms />
        <CheckoutOrder />
      </div>
    </section>
  );
};

export default CheckoutMain;
