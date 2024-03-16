import { IDiscountLabelProps, IDiscountLabelStyles } from "../../types/types";
import "./DiscountLabel.css";

const getLabelColor = (discount: string | number): IDiscountLabelStyles => {
  if (discount === "new") {
    return { background: "var(--new-item)", discountStatus: false }; // "#2EC1AC"
  } else {
    return { background: "var(--discount-item)", discountStatus: true }; // "#E97171"
  }
};

const DiscountLabel: React.FC<IDiscountLabelProps> = ({ discount }) => {
  const { background, discountStatus } = getLabelColor(discount);
  const checkedDiscount = Number(discount) > 100 ? 100 : discount;

  return (
    <div className="discLabelContainer" style={{ background }}>
      {discountStatus ? `-${checkedDiscount}%` : "new"}
    </div>
  );
};

export default DiscountLabel;
