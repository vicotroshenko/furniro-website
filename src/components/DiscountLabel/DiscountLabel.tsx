import './DiscountLabel.css';


interface IDiscountLabelStyles {
  background: string;
  discountStatus: boolean;
}

const getLabelColor = (discount: string | number): IDiscountLabelStyles => {
  if (discount === 'new') {
    return { background: 'var(--new-item)', discountStatus: false }; // "#2EC1AC"
  } else {
    return { background: 'var(--discount-item)', discountStatus: true }; // "#E97171"
  }
};

interface IDiscountLabelProps {
  discount: string | number;
}

const DiscountLabel: React.FC<IDiscountLabelProps> = ({ discount }) => {
  const { background, discountStatus } = getLabelColor(discount);
  const checkedDiscount = Number(discount) > 100 ? 100 : discount;

  return (
    <div
      className="discLabelContainer"
      style={{ background }}
    >
      {discountStatus ? `-${checkedDiscount}%` : 'new'}
    </div>
  );
};

export default DiscountLabel;