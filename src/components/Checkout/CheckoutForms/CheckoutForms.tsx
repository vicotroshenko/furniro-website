import { City, Country, State } from 'country-state-city';
import { useMemo, useState } from 'react';

import CheckoutFormsSelect from '../CheckoutFormsSelect/CheckoutFormsSelect';
import './CheckoutForms.css';

const countries = Country.getAllCountries();

interface IReactHookProps {
  register: any;
  errors: any;
}

enum InitialValue {
  firstName = 'firstName',
  lastName = 'lastName',
  company = 'company',
  country = 'country',
  region = 'region',
  city = 'city',
  zip = 'zip',
  phone = 'phone',
  email = 'email',
  additional = 'additional',
}

const initialValues: Record<InitialValue, string> = {
  firstName: '',
  lastName: '',
  company: '',
  country: '',
  region: '',
  city: '',
  zip: '',
  phone: '',
  email: '',
  additional: '',
};

const CheckoutForms: React.FC<IReactHookProps> = ({ register, errors }) => {
  const [values, setValues] = useState(initialValues);

  const handleFormValues = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const states = useMemo(
    () => State.getStatesOfCountry(values.country),
    [values.country]
  );

  const cities = useMemo(
    () => City.getCitiesOfState(values.country, values.region),
    [values.country, values.region]
  );

  return (
    <div className="checkoutContainer">
      <h2 className="checkoutTitle">Billing details</h2>
      <div className="checkoutForm">
        <div role="group">
          <div className="checkoutFormDivider">
            <label className="checkoutLabel">
              <span>First Name*</span>
              <input
                type="text"
                {...register(InitialValue.firstName, {
                  required: true,
                  onChange: () => handleFormValues,
                })}
                defaultValue={values.firstName}
                className="checkoutField"
              />
              {errors.firstName && (
                <span className="errorForms">*First Name is required</span>
              )}
            </label>
            <label className="checkoutLabel">
              <span>last Name*</span>
              <input
                type="text"
                {...register(InitialValue.lastName, {
                  required: true,
                  onChange: () => handleFormValues,
                })}
                defaultValue={values.lastName}
                className="checkoutField"
              />
              {errors.lastName && (
                <span className="errorForms">*Last Name is required</span>
              )}
            </label>
          </div>
          <label className="checkoutLabel">
            <span>Company Name (Optional)</span>
            <input
              type="text"
              {...register(InitialValue.company, {
                onChange: () => handleFormValues,
              })}
              defaultValue={values.company}
              className="checkoutField"
            />
          </label>
          <div className="checkoutLabel">
            <span>Country*</span>
            <CheckoutFormsSelect
              onChange={handleFormValues}
              countries={countries}
              nameList={InitialValue.country}
              value={values.country}
              register={register}
              errors={errors}
            />
          </div>
          <div className="checkoutLabel">
            <span>region*</span>
            <CheckoutFormsSelect
              onChange={handleFormValues}
              states={states}
              nameList={InitialValue.region}
              value={values.region}
              register={register}
              errors={errors}
            />
          </div>
          <div className="checkoutLabel">
            <span>city*</span>
            <CheckoutFormsSelect
              onChange={handleFormValues}
              cities={cities}
              nameList={InitialValue.city}
              value={values.city}
              register={register}
              errors={errors}
            />
          </div>
          <label className="checkoutLabel">
            <span>ZIP code</span>
            <input
              type="text"
              {...register(InitialValue.zip, {
                onChange: () => handleFormValues,
              })}
              defaultValue={values.zip}
              className="checkoutField"
            />
          </label>
          <label className="checkoutLabel">
            <span>phone*</span>
            <input
              type="tel"
              {...register(InitialValue.phone, {
                required: true,
                onChange: () => handleFormValues,
              })}
              defaultValue={values.phone}
              className="checkoutField"
            />
            {errors.phone && (
              <span className="errorForms">*Phone is required</span>
            )}
          </label>
          <label className="checkoutLabel">
            <span>email address*</span>
            <input
              type="email"
              {...register(InitialValue.email, {
                required: true,
                onChange: () => handleFormValues,
              })}
              defaultValue={values.email}
              className="checkoutField"
            />
            {errors.email && (
              <span className="errorForms">*Email is required</span>
            )}
          </label>
          <label className="checkoutLabel">
            <input
              type="text"
              {...register(InitialValue.additional, {
                onChange: () => handleFormValues,
              })}
              defaultValue={values.additional}
              className="checkoutField"
              placeholder="Additional information"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForms;
