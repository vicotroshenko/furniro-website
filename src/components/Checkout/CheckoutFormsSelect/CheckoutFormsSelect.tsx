import { ICity, ICountry, IState } from 'country-state-city';
import { nanoid } from 'nanoid';

import './CheckoutFormsSelect.css';

interface ISelectData {
  countries?: ICountry[];
  states?: IState[];
  cities?: ICity[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  nameList: string;
  value: string;
  register?: any;
  errors?: any;
}

const CheckoutFormsSelect: React.FC<ISelectData> = ({
  countries,
  states,
  cities,
  onChange,
  nameList,
  value,
  register,
  errors,
}) => {
  const data = countries || states || false;

  return (
    <div className="custom-select">
      <select
        onChange={onChange}
        {...register(nameList, { required: true, onChange })}
        name={nameList}
        value={value}
        className="checkout-select"
      >
        <option></option>
        {data &&
          data.map((country) => (
            <option
              key={nanoid()}
              value={country.isoCode}
            >
              {country.name}
            </option>
          ))}
        {cities &&
          cities.map(({ name }) => (
            <option
              key={nanoid()}
              value={name}
            >
              {name}
            </option>
          ))}
      </select>
      {errors[nameList] && (
        <span className="errorForms">*{nameList} is required</span>
      )}
    </div>
  );
};

export default CheckoutFormsSelect;
