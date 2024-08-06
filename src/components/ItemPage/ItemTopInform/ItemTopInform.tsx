import { memo, useCallback, useRef } from 'react';

import { isInCollection } from '../../../helpers/isInCollection';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { addToCart, deleteCartItem } from '../../../redux/cart/cartSlice';
import {
  addToComparison,
  deleteFromComparison,
} from '../../../redux/goods/goodsSlice';
import { ICart, IDataSlice } from '../../../types/types';
import ItemButtons from './ItemButtons/ItemButtons';
import ItemColorBar from './ItemColorBar/ItemColorBar';
import ItemDescribe from './ItemDescribe/ItemDescribe';
import ItemImageParade from './ItemImageParade/ItemImageParade';
import ItemShortDesc from './ItemShortDesc/ItemShortDesc';
import ItemSizeButtons from './ItemSizeButtons/ItemSizeButtons';
import './ItemTopInform.css';

interface IItemInnerProps {
  item: IDataSlice;
}
const ItemTopInform: React.FC<IItemInnerProps> = memo(({ item }) => {
  const amountRef = useRef<number>();
  const dispatch = useAppDispatch();

  const { comparison } = useAppSelector((state) => state.goods);
  const cart = useAppSelector((state) => state.cart.goods);

  const addToCompareItem = useCallback(
    (item: ICart) => {
      if (isInCollection(item._id, comparison)) {
        dispatch(deleteFromComparison({ id: item._id }));
        return;
      }
      dispatch(addToComparison(item));
    },
    [comparison, dispatch]
  );

  const getAmountFromUser = (amount: number) => {
    amountRef.current = amount;
  };

  const handleAddToCard = useCallback(
    (item: ICart) => {
      if (isInCollection(item._id, cart)) {
        const id = item._id;
        dispatch(deleteCartItem([id]));
        return;
      }
      const { _id, title, price, amount, pictures, discount } = item;
      const buyAmount = amountRef.current;
      const date = new Date();
      if (buyAmount) {
        const totalPrice = (+price * buyAmount).toFixed(2);
        dispatch(
          addToCart({
            _id,
            title,
            price,
            amount,
            pictures,
            discount,
            buyAmount,
            date: date.getDate(),
            totalPrice,
          })
        );
      }
    },
    [cart, dispatch]
  );

  return (
    <div className="it-wrapper">
      <div>
        <ItemImageParade pictures={item.pictures} />
      </div>
      <div className="it-info">
        <ItemDescribe
          rating={4}
          title={item.title}
          description={item.description}
          price={item.price}
          reviews={item.reviews}
        />
        <ItemSizeButtons size={['l', 'xl', 'xxl']} />
        <ItemColorBar colors={['red', 'black', 'violet']} />
        <ItemButtons
          amount={item.amount || 0}
          onCompare={() => addToCompareItem(item)}
          onAdd={() => handleAddToCard(item)}
          isCompare={isInCollection(item._id, comparison)}
          isAdded={isInCollection(item._id, cart)}
          getAmount={getAmountFromUser}
        />
        <ItemShortDesc
          category={item.category}
          tags={item.tags}
        />
      </div>
    </div>
  );
});

export default ItemTopInform;
