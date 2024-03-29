import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./CartPageItem.css";
import { ICartPageItemProps } from "../../../types/types";
import { Tooltip } from "@mui/material";
import { useCartContext } from "../../../hooks/useCartContext";

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
  const { cartState, setCartState } = useCartContext();

  const handleChangeBuyAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    if (!value) {
      return;
    }
    if (isNaN(+value)) {
      return;
    }

    setValue(value);

    const goods = cartState.goods.map(item => {
      if(item._id === id){
        return {...item, id, buyAmount: +value}
      } else {
        return item;
      }
    })
    setCartState({goods});
  };

  return (
    <ul className="cp-item-elem-list">
      <li className="cp-item-elem">
        <img src={picture} alt={title} className="image" />
      </li>
      <li className="cp-item-elem">
        <span>{title}</span>
      </li>
      <li className="cp-item-elem">
        <span>{price}{" "}$</span>
      </li>
      <li className="cp-item-elem">
        <Tooltip
          title="Change quantity"
          placement="bottom"
          arrow
          enterDelay={500}
          leaveDelay={200}
        >
          <input
            type="text"
            name="amount"
            defaultValue={value}
            onChange={handleChangeBuyAmount}
            autoComplete="off"
          />
        </Tooltip>
      </li>
      <li className="cp-item-elem">
        <span>{totalPrice}{" "}$</span>
      </li>
      <li className="cp-item-elem">
        <Tooltip
          title="Delete from cart"
          placement="bottom"
          arrow
          enterDelay={500}
          leaveDelay={200}
        >
          <button type="button" onClick={onClick}>
            <FaTrash
              style={{ width: "100%", height: "100%", fill: "inherit" }}
            />
          </button>
        </Tooltip>
      </li>
    </ul>
  );
};

export default CartPageItem;
