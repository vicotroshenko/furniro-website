import "./ItemTopInform.css";
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
import { addToComparison, deletFromComparison } from "../../../redux/goods/goodsSlice";


const ItemTopInform:React.FC<IItemInnerProps> = ({ item }) => {

  const dispatch = useAppDispatch();
  const { comparison } = useAppSelector((state) => state.goods);

  const isCompare = (item: ICart) => {
    if(isInCollection(item._id, comparison)){
      dispatch(deletFromComparison({id:item._id}))
      return;
    }
    dispatch(addToComparison(item));
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
        <ItemButtons amount={item.amount} onCompare={() => isCompare(item)} disabled={isInCollection(item._id, comparison)}/>
				<ItemShortDesc category={item.category} tags={item.tags}/>
      </div>
    </div>
  );
};

export default ItemTopInform;
