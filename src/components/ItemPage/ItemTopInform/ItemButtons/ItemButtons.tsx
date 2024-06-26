import { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IItemButtonsPros } from "../../../../types/types";
import "./ItemButtons.css";

const minusButtonName = "substruct";
const plusButtonName = "add";

const ItemButtons: React.FC<IItemButtonsPros> = ({
  amount,
  onAdd,
  onCompare,
  isCompare,
  isAdded,
  getAmount
}) => {

  const [amountItems, setAmountItems] = useState<number>(1);

  useEffect(() => {
    getAmount(amountItems);
  }, [getAmount, amountItems])
  


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
        {isAdded ? "delete from cart" : "add to cart"}
      </button>
      <button
        type="button"
        className="cardManageBtn"
        name="compare"
        onClick={onCompare}
      >
        {isCompare ? <FiMinus/> : <FiPlus />}
        {isCompare ? "Delete compare" : "compare"}
      </button>
    </div>
  );
};

export default ItemButtons;
