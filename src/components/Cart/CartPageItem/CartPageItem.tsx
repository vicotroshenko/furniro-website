import { Tooltip } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { updateCartItem } from '../../../redux/cart/cartSlice';
import './CartPageItem.css';

export interface ICartPageItemProps {
  title: string;
  price: string;
  id: string;
  picture: string;
  buyAmount: number;
  totalPrice: string;
  onClick: () => void;
}

const CartPageItem: React.FC<ICartPageItemProps> = memo(
  ({ id, picture, title, price, buyAmount, totalPrice, onClick }) => {
    const [value, setValue] = useState<string>(buyAmount.toString());
    const dispatch = useAppDispatch();

    const handleChangeBuyAmount = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (!value) {
          return;
        }
        if (isNaN(+value)) {
          return;
        }
        setValue(value);
        dispatch(updateCartItem({ id, buyAmount: +value }));
      },
      [dispatch, id]
    );

    return (
      <ul className="cp-item-elem-list">
        <li className="cp-item-elem">
          <img
            src={picture}
            alt={title}
            className="image"
          />
        </li>
        <li className="cp-item-elem">
          <span>{title}</span>
        </li>
        <li className="cp-item-elem">
          <span>{price} $</span>
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
          <span>{totalPrice} $</span>
        </li>
        <li className="cp-item-elem">
          <Tooltip
            title="Delete from cart"
            placement="bottom"
            arrow
            enterDelay={500}
            leaveDelay={200}
          >
            <button
              type="button"
              onClick={onClick}
            >
              <FaTrash className="cp-item-elem-trash_icon" />
            </button>
          </Tooltip>
        </li>
      </ul>
    );
  }
);

export default CartPageItem;
