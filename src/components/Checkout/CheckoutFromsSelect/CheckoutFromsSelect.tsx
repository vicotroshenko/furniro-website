import { nanoid } from "nanoid";
import { ISelectData } from "../../../types/types";
import "./CheckoutFromsSelect.css";

const CheckoutFromsSelect: React.FC<ISelectData> = ({
  countries,
  states,
  cities,
  onChange,
  nameList,
  value,
}) => {
  const data = countries || states || false;

  return (
    <div className="custom-select">
      <select onChange={onChange} name={nameList} value={value}>
        <option></option>
        {data &&
          data.map((country) => (
            <option key={nanoid()} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        {cities &&
          cities.map(({ name }) => (
            <option key={nanoid()} value={name}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CheckoutFromsSelect;
