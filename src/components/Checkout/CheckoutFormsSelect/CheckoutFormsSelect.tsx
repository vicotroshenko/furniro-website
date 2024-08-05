import { ICity, ICountry, IState } from 'country-state-city';
import { nanoid } from 'nanoid';

import './CheckoutFormsSelect.css';

interface ISelectData {
  countries?: ICountry[];
  states?: IState[];
  cities?: ICity[];
  nameList: string;
  value: string;
  register?: any;
  errors?: any;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CheckoutFormsSelect: React.FC<ISelectData> = ({
  countries,
  states,
  cities,
  nameList,
  value,
  register,
  errors,
  onChange,
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
