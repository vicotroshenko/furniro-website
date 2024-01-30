import "./ItemTopInform.css";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useParams } from "react-router-dom";
import { IDataSlice } from "../../../types/types";
import ItemImageParade from "./ItemImageParade/ItemImageParade";
import ItemDescribe from "./ItemDescribe/ItemDescribe";
import ItemSizeButtons from "./ItemSizeButtons/ItemSizeButtons";
import ItemColorBar from "./ItemColorBar/ItemColorBar";
import ItemButtons from "./ItemButtons/ItemButtons";
import ItemShortDesc from "./ItemShortDesc/ItemShortDesc";

const ItemTopInform = () => {
  const { id } = useParams();
  const goods = useAppSelector((state) => state.goods.allGoods);
  const [item] = goods.filter((element: IDataSlice) => element._id === id);
  console.log("item: ", item);

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
        <ItemButtons amount={item.amount} />
				<ItemShortDesc category={item.category} tags={item.tags}/>
      </div>
    </div>
  );
};

export default ItemTopInform;
