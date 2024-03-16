import { IDataSlice, IItemInnerProps } from "../../../types/types";
import ItemImageParade from "./ItemImageParade/ItemImageParade";
import ItemDescribe from "./ItemDescribe/ItemDescribe";
import ItemSizeButtons from "./ItemSizeButtons/ItemSizeButtons";
import ItemColorBar from "./ItemColorBar/ItemColorBar";
import ItemButtons from "./ItemButtons/ItemButtons";
import ItemShortDesc from "./ItemShortDesc/ItemShortDesc";
import { isInCollection } from "../../../helpers/isInCollection";
import "./ItemTopInform.css";
import { useRef } from "react";
import { useGoodsContext } from "../../../hooks/useGoodsContext";
import { useCartContext } from "../../../hooks/useCartContext";


const ItemTopInform:React.FC<IItemInnerProps> = ({ item }) => {
  const amountRef = useRef<number>();
  
  const { goodsState, setGoodsState } = useGoodsContext();
  const { cartState, setCartState } = useCartContext();

  const cart = cartState.goods;


  const addToCompareItem = (comparingItem: IDataSlice) => {
    if (isInCollection(comparingItem._id, goodsState.comparison)) {
      const comparison = goodsState.comparison.filter(item => item._id !== comparingItem._id);
      setGoodsState(prev => ({...prev, comparison}));
    } else {
      setGoodsState(prev => ({...prev, comparison:[...prev.comparison, comparingItem]}));
    }
  };

  const getAmountFromUser = (amount: number) => {
    amountRef.current = amount;
  };

  const handleAddToCard = (item: IDataSlice) => {
    if (isInCollection(item._id, cart)) {
      const goods = cart.filter(el => el._id !==item._id);
      setCartState(prev => ({...prev, goods}));
    }
    const { _id, title, price, amount, pictures, discount } = item;
    const buyAmount = amountRef.current;
    const date = new Date();
    if (buyAmount) {
      const totalPrice = (+price * buyAmount).toFixed(2);
      const newCartItem = {
        _id,
        title,
        price,
        amount,
        pictures,
        discount,
        buyAmount,
        date: date.getDate().toString(),
        totalPrice,
      };

      setCartState(prev => ({...prev, goods: [...prev.goods, newCartItem]}));
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
          isCompare={isInCollection(item._id, goodsState.comparison)}
          isAdded={isInCollection(item._id, cart)}
          getAmount={getAmountFromUser}
        />
        <ItemShortDesc category={item.category} tags={item.tags} />
      </div>
    </div>
  );
};

export default ItemTopInform;
