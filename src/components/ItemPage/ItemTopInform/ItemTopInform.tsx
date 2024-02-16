import { ICart, IItemInnerProps } from "../../../types/types";
import ItemImageParade from "./ItemImageParade/ItemImageParade";
import ItemDescribe from "./ItemDescribe/ItemDescribe";
import ItemSizeButtons from "./ItemSizeButtons/ItemSizeButtons";
import ItemColorBar from "./ItemColorBar/ItemColorBar";
import ItemButtons from "./ItemButtons/ItemButtons";
import ItemShortDesc from "./ItemShortDesc/ItemShortDesc";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { isInCollection } from "../../../helpers/isInCollection";
import "./ItemTopInform.css";

import {
  addToComparison,
  deletFromComparison,
} from "../../../redux/goods/goodsSlice";
import { addToCart, deleteCartItem } from "../../../redux/cart/cartSlice";
import { useRef } from "react";


const ItemTopInform:React.FC<IItemInnerProps> = ({ item }) => {
  const amountRef = useRef<number>();
  const dispatch = useAppDispatch();
  
  const { comparison } = useAppSelector((state) => state.goods);
  const cart = useAppSelector((state) => state.cart.goods);


  const addToCompareItem = (item: ICart) => {
    if (isInCollection(item._id, comparison)) {
      dispatch(deletFromComparison({ id: item._id }));
      return;
    }
    dispatch(addToComparison(item));
  };

  const getAmountFromUser = (amount: number) => {
    amountRef.current = amount;
  };

  const handleAddToCard = (item: ICart) => {
    if (isInCollection(item._id, cart)) {
      dispatch(deleteCartItem({ id: item._id }));
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
  };

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
        <ItemSizeButtons size={["l", "xl", "xxl"]} />
        <ItemColorBar colors={["red", "black", "violet"]} />
        <ItemButtons
          amount={item.amount || 0}
          onCompare={() => addToCompareItem(item)}
          onAdd={() => handleAddToCard(item)}
          isCompare={isInCollection(item._id, comparison)}
          isAdded={isInCollection(item._id, cart)}
          getAmount={getAmountFromUser}
        />
        <ItemShortDesc category={item.category} tags={item.tags} />
      </div>
    </div>
  );
};

export default ItemTopInform;
