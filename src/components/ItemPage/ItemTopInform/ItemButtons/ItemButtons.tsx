import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./ItemButtons.css";
import { IItemButtonsPros } from "../../../../types/types";

const minusButtonName = "substruct";
const plusButtonName = "add";

const ItemButtons: React.FC<IItemButtonsPros> = ({
  amount,
  onAdd,
  onCompare,
  disabled,
}) => {

  const [amountItems, setAmountItems] = useState<number>(1);


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
        if (prev < 1) {
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
        <button type="button" name={minusButtonName} onClick={getItemAmount}>
          <FiMinus />
        </button>
        <span>{amountItems}</span>
        <button type="button" name={plusButtonName} onClick={getItemAmount}>
          <FiPlus />
        </button>
      </div>
      <button
        type="button"
        className="cardManageBtn"
        name="to card"
        onClick={onAdd}
      >
        add to cart
      </button>
      <button
        type="button"
        className="cardManageBtn"
        name="compare"
        onClick={onCompare}
      >
        {disabled ? <FiMinus/> : <FiPlus />}
        {disabled ? "Delete compare" : "compare"}
      </button>
    </div>
  );
};

export default ItemButtons;
