import { useParams } from "react-router-dom";
import ItemBottomInform from "../components/ItemPage/ItemBottomInform/ItemBottomInform";
import ItemTopInform from "../components/ItemPage/ItemTopInform/ItemTopInform";
import { useAppSelector } from "../hooks/useAppSelector";
import Loader from "../components/Loader/Loader";
import { useEffect } from "react";
import { getOneById } from "../redux/goods/operations";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { Puff } from "react-loader-spinner";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

const ItemPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { itemById, status } = useAppSelector((state) => state.goods);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(getOneById({ id }));
    }
  }, [dispatch, id]);

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
