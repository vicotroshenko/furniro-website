import { useParams } from "react-router-dom";
import ItemBottomInform from "../components/ItemPage/ItemBottomInform/ItemBottomInform";
import ItemTopInform from "../components/ItemPage/ItemTopInform/ItemTopInform";
import Loader from "../components/Loader/Loader";
import { useEffect } from "react";
import { Puff } from "react-loader-spinner";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import { useGoodsContext } from "../hooks/useGoodsContext";
import { getOneById } from "../api/goods";

const ItemPage = () => {
  const { id } = useParams();

  const { goodsState, setGoodsState } = useGoodsContext()
  const { itemById, status } = goodsState;

  useEffect(() => {
    window.scrollTo(0, 0);
    (async()=>{
      setGoodsState(prev => ({...prev, status: "loading"}));
      if(id){
        const response = await getOneById({id});
        if(response){
          setGoodsState(prev => ({...prev, itemById: response, status: "loading"}));
        } else {
          setGoodsState(prev => ({...prev, status: "error"}));
        }
      }
    })()
  }, [id, setGoodsState]);

  if (itemById._id === id && status === "success") {
    return (
      <>
        <Loader />
        <div>
          <ItemTopInform item={itemById} />
          <ItemBottomInform item={itemById} />
        </div>
      </>
    );
  } else if (status === "error") {
    return <NotFoundPage status="error" />;
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 100px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Puff
          visible={true}
          height="100"
          width="100"
          color="#b88e2f"
          ariaLabel="item-loading"
        />
      </div>
    );
  }
};

export default ItemPage;
