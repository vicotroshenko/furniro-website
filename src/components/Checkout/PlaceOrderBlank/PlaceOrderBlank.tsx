import { useState } from "react";
import { IReacHookProps } from "../../../types/types";
import "./PlaceOrderBlank.css";

const bank = "bank";
const cash = "cash";


const PlaceOrderBlank: React.FC<IReacHookProps> = ({ register, errors }) => {
  const [value, setValue] = useState<string | null>(null);

  const labelStyles = (element: string, value: string | null): string => {
    if (value === element) {
      return "orderRadioLable";
    } else {
      return "orderRadioLable orederDisabled";
    }
  };

  return (
    <div className="placeOrderForm">
      <div role="group">
        <div className="orderRadioItem">
          <input
            type="radio"
            id="radio-bank"
            className="orderRadioField"
            {...register("orderType", {
              required: true,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value),
            })}
            value={bank}
          />
          <label htmlFor="radio-bank" className={labelStyles(bank, value)}>
            Direct Bank Transfer
          </label>
          {value === bank && (
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          )}
        </div>

        <div className="orderRadioItem">
          <input
            type="radio"
            id="radio-cash"
            className="orderRadioField"
            {...register("orderType", {
              required: true,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value),
            })}
            value={cash}
          />
          <label htmlFor="radio-cash" className={labelStyles(cash, value)}>
            Cash On Delivery
          </label>
          {value === cash && (
            <p>Pay for the order upon receipt of the goodsю</p>
          )}
        </div>
        <p className="orderAgreement">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <b>privacy policy</b>.
          {errors.orderType && (
            <span className="errorForms">*You must choose payment method</span>
          )}
        </p>
        <button type="submit" className="orederSubmitBtn">
          Place order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrderBlank;
