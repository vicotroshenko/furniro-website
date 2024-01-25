// import { IRangeItemProps } from "../../../../types/types";
import "./RangeItem.css";

interface IRangeItemProps {
	image: any;
	text: string;
	link: string;
}

const RangeItem: React.FC<IRangeItemProps> = ({ image, text, link }) => {
  return (
    <li className="rangeItem">
      <a href={link}>
        <div
          className="rangeItemImage"
          style={{ background: `center/cover no-repeat url(${image})` }}
        ></div>
      </a>
      <a href={link}>
        <p className="rangeItemText">{text}</p>
      </a>
    </li>
  );
};

export default RangeItem;
