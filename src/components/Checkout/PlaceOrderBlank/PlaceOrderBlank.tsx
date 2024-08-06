import classNames from 'classnames';
import { memo, useState } from 'react';

import './PlaceOrderBlank.css';

enum PaymentMethod {
  BANK = 'bank',
  CASH = 'cash',
}

export interface IReactHookProps {
  register: any;
  errors: any;
}

const PlaceOrderBlank: React.FC<IReactHookProps> = memo(
  ({ register, errors }) => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div className="placeOrderForm">
        <div role="group">
          <div className="orderRadioItem">
            <input
              type="radio"
              id="radio-bank"
              className="orderRadioField"
              {...register('orderType', {
                required: true,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value),
              })}
              value={PaymentMethod.BANK}
            />
            <label
              htmlFor="radio-bank"
              className={classNames('orderRadioLabel', {
                orderDisabled: PaymentMethod.BANK !== value,
              })}
            >
              Direct Bank Transfer
            </label>
            {value === PaymentMethod.BANK && (
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
          </div>

          <div className="orderRadioItem">
            <input
              type="radio"
              id="radio-cash"
              className="orderRadioField"
              {...register('orderType', {
                required: true,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value),
              })}
              value={PaymentMethod.CASH}
            />
            <label
              htmlFor="radio-cash"
              className={classNames('orderRadioLabel', {
                orderDisabled: PaymentMethod.CASH !== value,
              })}
            >
              Cash On Delivery
            </label>
            {value === PaymentMethod.CASH && (
              <p>Pay for the order upon receipt of the goods</p>
            )}
          </div>
          <p className="orderAgreement">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <b>privacy policy</b>.
            {errors.orderType && (
              <span className="errorForms">
                *You must choose payment method
              </span>
            )}
          </p>
          <button
            type="submit"
            className="orderSubmitBtn"
          >
            Place order
          </button>
        </div>
      </div>
    );
  }
);

export default PlaceOrderBlank;
