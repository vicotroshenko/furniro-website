import { useEffect, useMemo, useState } from "react";
import { Country, State, City } from "country-state-city";
import CheckoutFromsSelect from "../CheckoutFormsSelect/CheckoutFormsSelect";
import { ICheckoutFormValues, IGetData } from "../../../types/types";
import "./CheckoutForms.css";

const conuntries = Country.getAllCountries();

const getListOfStates = (isoCode: string): any[] => {
  return State.getStatesOfCountry(isoCode);
};

const getListOfCities = (isoCode: string, regionCode: string): any[] => {
  return City.getCitiesOfState(isoCode, regionCode);
};

const CheckoutForms:React.FC<IGetData> = ({ getFormData }) => {
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

  useEffect(() => {
    getFormData(values)
  }, [values, getFormData])
  

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
      <form className="checkoutForm">
        <div role="group">
          <div className="checkoutFormDivider">
            <label className="checkoutLabel">
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                defaultValue={values.firstName}
                onChange={handleFormValues}
                className="checkoutField"
              />
            </label>
            <label className="checkoutLabel">
              <span>last Name</span>
              <input
                type="text"
                name="lastName"
                defaultValue={values.lastName}
                onChange={handleFormValues}
                className="checkoutField"
              />
            </label>
          </div>
          <label className="checkoutLabel">
            <span>Company Name (Optional)</span>
            <input
              type="text"
              name="company"
              defaultValue={values.company}
              onChange={handleFormValues}
              className="checkoutField"
            />
          </label>
          <div className="checkoutLabel">
            <span>Country</span>
            <CheckoutFromsSelect
              onChange={handleFormValues}
              countries={conuntries}
              nameList="country"
              value={values.country}
            />
          </div>
          <div className="checkoutLabel">
            <span>region</span>
            <CheckoutFromsSelect
              onChange={handleFormValues}
              states={states}
              nameList="region"
              value={values.region}
            />
          </div>
          <div className="checkoutLabel">
            <span>city</span>
            <CheckoutFromsSelect
              onChange={handleFormValues}
              cities={cities}
              nameList="city"
              value={values.city}
            />
          </div>
          <label className="checkoutLabel">
            <span>ZIP code</span>
            <input
              type="text"
              name="zip"
              defaultValue={values.zip}
              onChange={handleFormValues}
              className="checkoutField"
            />
          </label>
          <label className="checkoutLabel">
            <span>phone</span>
            <input
              type="tel"
              name="phone"
              defaultValue={values.phone}
              onChange={handleFormValues}
              className="checkoutField"
            />
          </label>
          <label className="checkoutLabel">
            <span>email address</span>
            <input
              type="email"
              name="email"
              defaultValue={values.email}
              onChange={handleFormValues}
              className="checkoutField"
            />
          </label>
          <label className="checkoutLabel">
            <input
              type="text"
              name="additional"
              defaultValue={values.additional}
              onChange={handleFormValues}
              className="checkoutField"
              placeholder="Additional information"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForms;
