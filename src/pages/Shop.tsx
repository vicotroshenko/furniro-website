import { useEffect, useMemo } from "react";
import AdvantagesMain from "../components/Advantages/AdvantagesMain/AdvantagesMain";
import Loader from "../components/Loader/Loader";
import NavigationScreen from "../components/NavigationScreen/NavigationScreen";
import FilterBar from "../components/Shop/FilterBar/FilterBar";
import ProductsShopBook from "../components/Shop/ProductsShopBook/ProductsShopBook";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import { getAllGoods, getAllTagsCategories } from "../redux/goods/operations";

const Shop = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { status, price } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllTagsCategories({ name: "tags" }));
    dispatch(getAllTagsCategories({ name: "category" }));
  }, [dispatch]);

  useEffect(() => {
    if (status) {
      dispatch(getAllGoods({ status: status }));
    }
    if (price) {
      dispatch(getAllGoods({ price: "1" }));
    }
    if (!price && !status) {
      dispatch(getAllGoods({}));
    }
  }, [dispatch, status, price]);

  return (
    <>
      <Loader />
      <div>
        <NavigationScreen />
        <FilterBar />
        <ProductsShopBook />
        <AdvantagesMain />
      </div>
    </>
  );
};

export default Shop;
