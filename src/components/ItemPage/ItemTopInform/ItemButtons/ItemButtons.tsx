import { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import './ItemButtons.css';

const minusButtonName = 'substruct';
const plusButtonName = 'add';

interface IItemButtonsPros {
  amount: number;
  isCompare?: boolean;
  isAdded?: boolean;
  onAdd?: () => void;
  onCompare?: () => void;
  getAmount: (amount: number) => void;
}

const ItemButtons: React.FC<IItemButtonsPros> = ({
  amount,
  isCompare,
  isAdded,
  onAdd,
  onCompare,
  getAmount,
}) => {
  const [amountItems, setAmountItems] = useState<number>(1);

  useEffect(() => {
    getAmount(amountItems);
  }, [getAmount, amountItems]);

  const getItemAmount = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    if (button.name === plusButtonName) {
      setAmountItems((prev) => {
        if (prev >= amount) {
          return prev;
        } else {
          return prev + 1;
        }
      });
    }
    if (button.name === minusButtonName) {
      setAmountItems((prev) => {
        if (prev <= 1) {
          return prev;
        } else {
          return prev - 1;
        }
      });
    }
  };

  return (
    <div className="cardManageBtuContainer">
      <div className="itemAmountButton">
        <button
          type="button"
          name={minusButtonName}
          onClick={getItemAmount}
        >
          <FiMinus />
        </button>
        <span>{amountItems}</span>
        <button
          type="button"
          name={plusButtonName}
          onClick={getItemAmount}
        >
          <FiPlus />
        </button>
      </div>
      <button
        type="button"
        className="cardManageBtn"
        name="to card"
        onClick={onAdd}
      >
        {isAdded ? 'delete from cart' : 'add to cart'}
      </button>
      <button
        type="button"
        className="cardManageBtn"
        name="compare"
        onClick={onCompare}
      >
        {isCompare ? <FiMinus /> : <FiPlus />}
        {isCompare ? 'Delete compare' : 'compare'}
      </button>
    </div>
  );
};

export default ItemButtons;
