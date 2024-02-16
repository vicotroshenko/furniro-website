import CheckoutForms from "./CheckoutForms/CheckoutForms";
import CheckoutOrder from "./CheckoutOrder/CheckoutOrder";
import "./CheckoutMain.css";
import { ICheckoutFormValues } from "../../types/types";
import { useRef } from "react";


const CheckoutMain = () => {

  const paymentRef = useRef<ICheckoutFormValues | null>(null)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bank = e.currentTarget[0] as HTMLInputElement;
    const cash = e.currentTarget[1] as HTMLInputElement;
    let payment:string = "";

    if(bank.checked){
      payment = bank.value;
    }
    if(cash.checked){
      payment = cash.value;
    }

    const customerData = {...paymentRef.current, payment}
    alert(JSON.stringify(customerData))
  }

  const handleFormData = (data:ICheckoutFormValues) => {
    paymentRef.current = data;
  }

  return (
    <section className="checkout-section">
      <div className="checkout-container mc-c-flex">
        <CheckoutForms getFormData={handleFormData}/>
        <CheckoutOrder onSubmit={handleSubmit}/>
      </div>
    </section>
  );
};

export default CheckoutMain;
