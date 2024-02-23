import { Link } from "react-router-dom";
import { IRangeItemProps } from "../../../../types/types";
import "./RangeItem.css";


const RangeItem: React.FC<IRangeItemProps> = ({ image, text, link }) => {
  return (
    <li className="rangeItem">
      <Link to={link}>
        <div
          className="rangeItemImage"
          style={{ background: `center/cover no-repeat url(${image})` }}
        ></div>
      </Link>
      <Link to={link}>
        <p className="rangeItemText">{text}</p>
      </Link>
    </li>
  );
};

export default RangeItem;
