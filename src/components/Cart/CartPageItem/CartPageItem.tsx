import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./CartPageItem.css";
import { ICartPageItemProps } from "../../../types/types";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { updateCartItem } from "../../../redux/cart/cartSlice";

const CartPageItem: React.FC<ICartPageItemProps> = ({
  id,
  picture,
  title,
  price,
  buyAmount,
  totalPrice,
  onClick,
}) => {
  const [value, setValue] = useState<string>(buyAmount.toString());
  const dispatch = useAppDispatch();

  const handleChangeBuyAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if(!value){
      return;
    }
    if(isNaN(+value)){
      return;
    }
    setValue(value);
    dispatch(updateCartItem({id, buyAmount: +value}))
  }

  return (
    <ul className="cp-item-elem-list">
      <li className="cp-item-elem">
        <img src={picture} alt={title} className="image" />
      </li>
      <li className="cp-item-elem">
        <span>{title}</span>
      </li>
      <li className="cp-item-elem">
        <span>{price}</span>
      </li>
      <li className="cp-item-elem">
        <input
          type="text"
          name="amount"
          defaultValue={value}
          onChange={handleChangeBuyAmount}
          autoComplete="off"
        />
      </li>
      <li className="cp-item-elem">
        <span>{totalPrice}</span>
      </li>
      <li className="cp-item-elem">
        <button type="button" onClick={onClick}>
          <FaTrash style={{ width: "100%", height: "100%", fill: "inherit" }} />
        </button>
      </li>
    </ul>
  );
};

export default CartPageItem;
