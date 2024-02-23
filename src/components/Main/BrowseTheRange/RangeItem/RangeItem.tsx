import { NavLink } from "react-router-dom";
import { IRangeItemProps } from "../../../../types/types";
import "./RangeItem.css";


const RangeItem: React.FC<IRangeItemProps> = ({ image, text, link }) => {
  return (
    <li className="rangeItem">
      <NavLink to={link}>
        <div
          className="rangeItemImage"
          style={{ background: `center/cover no-repeat url(${image})` }}
        ></div>
      </NavLink>
      <NavLink to={link}>
        <p className="rangeItemText">{text}</p>
      </NavLink>
    </li>
  );
};

export default RangeItem;
