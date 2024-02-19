import { useMemo, useState } from "react";
import { Country, State, City } from "country-state-city";
import CheckoutFromsSelect from "../CheckoutFormsSelect/CheckoutFormsSelect";
import { ICheckoutFormValues, IReacHookProps } from '../../../types/types';
import "./CheckoutForms.css";

const conuntries = Country.getAllCountries();

const getListOfStates = (isoCode: string): any[] => {
  return State.getStatesOfCountry(isoCode);
};

const getListOfCities = (isoCode: string, regionCode: string): any[] => {
  return City.getCitiesOfState(isoCode, regionCode);
};

const CheckoutForms:React.FC<IReacHookProps> = ({ register, errors }) => {
  const [values, setValues] = useState<ICheckoutFormValues>({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    region: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
    additional: "",
  });


  const handleFormValues = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const states = useMemo(
    () => getListOfStates(values.country),
    [values.country]
  );

  const cities = useMemo(
    () => getListOfCities(values.country, values.region),
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
                {...register("firstName", { required: true, onChange: () =>handleFormValues })}
                defaultValue={values.firstName}
                className="checkoutField"
              />
            {errors.firstName && <span className="errorForms">*First Name is required</span>}
            </label>
            <label className="checkoutLabel">
              <span>last Name*</span>
              <input
                type="text"
                {...register("lastName", { required: true, onChange: () =>handleFormValues })}
                defaultValue={values.lastName}
                className="checkoutField"
              />
              {errors.lastName && <span className="errorForms">*Last Name is required</span>}
            </label>
          </div>
          <label className="checkoutLabel">
            <span>Company Name (Optional)</span>
            <input
              type="text"
              {...register("company", {onChange: () =>handleFormValues})}
              defaultValue={values.company}
              className="checkoutField"
            />
          </label>
          <div className="checkoutLabel">
            <span>Country*</span>
            <CheckoutFromsSelect
              onChange={handleFormValues}
              countries={conuntries}
              nameList="country"
              value={values.country}
              register={register}
              errors={errors}
            />
          </div>
          <div className="checkoutLabel">
            <span>region*</span>
            <CheckoutFromsSelect
              onChange={handleFormValues}
              states={states}
              nameList="region"
              value={values.region}
              register={register}
              errors={errors}
            />
          </div>
          <div className="checkoutLabel">
            <span>city*</span>
            <CheckoutFromsSelect
              onChange={handleFormValues}
              cities={cities}
              nameList="city"
              value={values.city}
              register={register}
              errors={errors}
            />
          </div>
          <label className="checkoutLabel">
            <span>ZIP code</span>
            <input
              type="text"
              {...register("zip", {onChange: () =>handleFormValues})}
              defaultValue={values.zip}
              className="checkoutField"
            />
          </label>
          <label className="checkoutLabel">
            <span>phone*</span>
            <input
              type="tel"
              {...register("phone", { required: true, onChange: () =>handleFormValues })}
              defaultValue={values.phone}
              className="checkoutField"
            />
            {errors.phone && <span className="errorForms">*Phone is required</span>}
          </label>
          <label className="checkoutLabel">
            <span>email address*</span>
            <input
              type="email"
              {...register("email", { required: true, onChange: () =>handleFormValues })}
              defaultValue={values.email}
              className="checkoutField"
            />
            {errors.email && <span className="errorForms">*Email is required</span>}
          </label>
          <label className="checkoutLabel">
            <input
              type="text"
              {...register("additional", {onChange: () =>handleFormValues})}
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
