import classNames from 'classnames';

import { ItemStatus } from '../../constants';
import './DiscountLabel.css';

interface IDiscountLabelProps {
  discount: string | number;
}

const DiscountLabel: React.FC<IDiscountLabelProps> = ({ discount }) => {
  const checkedDiscount = +discount > 100 ? 100 : discount;
  const isNew = discount === ItemStatus.NEW;
  return (
    <div
      className={classNames('discLabelContainer', {
        discLabelBack_discount: !isNew,
      })}
    >
      {!isNew ? `-${checkedDiscount}%` : ItemStatus.NEW}
    </div>
  );
};

export default DiscountLabel;
