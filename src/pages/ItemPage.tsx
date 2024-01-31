import { useParams } from "react-router-dom";
import ItemBottomInform from "../components/ItemPage/ItemBottomInform/ItemBottomInform"
import ItemTopInform from "../components/ItemPage/ItemTopInform/ItemTopInform"
import { useAppSelector } from "../hooks/useAppSelector";
import { IDataSlice } from "../types/types";


const ItemPage = () => {

	const { id } = useParams();
  const goods = useAppSelector((state) => state.goods.allGoods);
  const [item] = goods.filter((element: IDataSlice) => element._id === id);

	return (
		<div>
			<ItemTopInform item={item}/>
			<ItemBottomInform item={item}/>
		</div>
	)
}

export default ItemPage