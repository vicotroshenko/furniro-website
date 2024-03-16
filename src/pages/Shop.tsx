import { useEffect, useMemo } from "react";
import AdvantagesMain from "../components/Advantages/AdvantagesMain/AdvantagesMain";
import Loader from "../components/Loader/Loader";
import NavigationScreen from "../components/NavigationScreen/NavigationScreen";
import FilterBar from "../components/Shop/FilterBar/FilterBar";
import ProductsShopBook from "../components/Shop/ProductsShopBook/ProductsShopBook";
import { useSearchParams } from "react-router-dom";
import { getAllGoods, getAllTagsCategories } from "../api/goods";
// import { getAllGoods, getAllTagsCategories } from "../redux/goods/operations";

const Shop = () => {
  const [searchParams] = useSearchParams();

  const { status, price, tags, category, page="1", limit } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );


  useEffect(() => {
    window.scrollTo(0, 0);
    (async()=> {
      await getAllTagsCategories({ name: "tags" })
      await getAllTagsCategories({ name: "category" })
    })()
  }, [page]);

  useEffect(() => {
    (async()=>{
      if (status) {
        await getAllGoods({ page, limit, status, tags, category })
      }
      if (price) {
        await getAllGoods({ page, limit, price: "1", tags, category })
      }
      if (!price && !status) {
        await getAllGoods({page, limit, tags, category})
      }
      if (tags || category) {
        await getAllGoods({ page, limit, tags, category })
      }
    })();
  }, [status, price, tags, category, page, limit]);

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
