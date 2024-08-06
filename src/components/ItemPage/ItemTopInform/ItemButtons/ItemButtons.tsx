import { memo, useCallback, useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import './ItemButtons.css';

enum ButtonName {
  SUBTRACT = 'subtract',
  PLUS = 'add',
  TO_CART = 'to cart',
  COMPARE = 'compare',
}

interface IItemButtonsPros {
  amount: number;
  isCompare?: boolean;
  isAdded?: boolean;
  onAdd?: () => void;
  onCompare?: () => void;
  getAmount: (amount: number) => void;
}

const ItemButtons: React.FC<IItemButtonsPros> = memo(
  ({ amount, isCompare, isAdded, onAdd, onCompare, getAmount }) => {
    const [amountItems, setAmountItems] = useState<number>(1);

    useEffect(() => {
      getAmount(amountItems);
    }, [getAmount, amountItems]);

    const getItemAmount = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        const name = event.currentTarget.name as ButtonName;
        if (name === ButtonName.COMPARE || name === ButtonName.TO_CART) return;
        const actions = {
          [ButtonName.PLUS]: () =>
            setAmountItems((prev) => {
              if (prev >= amount) {
                return prev;
              } else {
                return prev + 1;
              }
            }),
          [ButtonName.SUBTRACT]: () =>
            setAmountItems((prev) => {
              if (prev <= 1) {
                return prev;
              } else {
                return prev - 1;
              }
            }),
        };
        actions[name]();
      },
      [amount]
    );

    return (
      <div className="cardManageBtuContainer">
        <div className="itemAmountButton">
          <button
            type="button"
            name={ButtonName.SUBTRACT}
            onClick={getItemAmount}
          >
            <FiMinus />
          </button>
          <span>{amountItems}</span>
          <button
            type="button"
            name={ButtonName.PLUS}
            onClick={getItemAmount}
          >
            <FiPlus />
          </button>
        </div>
        <button
          type="button"
          className="cardManageBtn"
          name={ButtonName.TO_CART}
          onClick={onAdd}
        >
          {isAdded ? 'delete from cart' : 'add to cart'}
        </button>
        <button
          type="button"
          className="cardManageBtn"
          name={ButtonName.COMPARE}
          onClick={onCompare}
        >
          {isCompare ? <FiMinus /> : <FiPlus />}
          {isCompare ? 'Delete compare' : 'compare'}
        </button>
      </div>
    );
  }
);

export default ItemButtons;
