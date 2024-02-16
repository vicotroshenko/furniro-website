import { useParams } from "react-router-dom";
import ItemBottomInform from "../components/ItemPage/ItemBottomInform/ItemBottomInform";
import ItemTopInform from "../components/ItemPage/ItemTopInform/ItemTopInform";
import { useAppSelector } from "../hooks/useAppSelector";
import Loader from "../components/Loader/Loader";
import { useEffect } from "react";
import { getOneById } from '../redux/goods/operations';
import { useAppDispatch } from "../hooks/useAppDispatch";

const ItemPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => state.goods.itemById);

  useEffect(() => {
    window.scrollTo(0, 0);
    if(id){
      dispatch(getOneById({id}));
    }
  }, [dispatch, id]);

  if(item._id === id){
    return (
      <>
        <Loader />
        <div>
          <ItemTopInform item={item}/>
          <ItemBottomInform item={item}/> 
        </div>
      </>
    );
  } else {
    return (<div>Loading...</div>)
  }
};

export default ItemPage;
