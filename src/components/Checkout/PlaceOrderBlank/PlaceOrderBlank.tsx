import { useState } from "react";
import { ISubmit } from "../../../types/types";
import "./PlaceOrderBlank.css";

const bank = "bank";
const cash = "cash";

const PlaceOrderBlank:React.FC<ISubmit> = ({ onSubmit }) => {
  const [value, setValue] = useState<string | null>(null);

	const labelStyles = (element: string, value:string | null):string => {
		if(value === element){
			return "orderRadioLable";
		} else {
			return "orderRadioLable orederDisabled";
		}
	}

  return (
    <form className="placeOrderForm" onSubmit={onSubmit}>
      <div role="group">
        <div className="orderRadioItem">
          <input
            type="radio"
            id="radio-bank"
            className="orderRadioField"
            name="order-type"
            value={bank}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="radio-bank" className={labelStyles(bank, value)}>
            Direct Bank Transfer
          </label>
          {value === bank && <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>}
        </div>

        <div className="orderRadioItem">
          <input
            type="radio"
            id="radio-cash"
            className="orderRadioField"
            name="order-type"
            value={cash}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="radio-cash" className={labelStyles(cash, value)}>
            Cash On Delivery
          </label>
          {value === cash && <p>
            Pay for the order upon receipt of the goodsю
          </p>}
        </div>
				<p className="orderAgreement">
				Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
				</p>
				<button type="submit" className="orederSubmitBtn">
					Place order
				</button>
      </div>
    </form>
  );
};

export default PlaceOrderBlank;
