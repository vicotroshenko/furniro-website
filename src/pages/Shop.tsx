import { useEffect, useMemo } from "react";
import AdvantagesMain from "../components/Advantages/AdvantagesMain/AdvantagesMain";
import Loader from "../components/Loader/Loader";
import NavigationScreen from "../components/NavigationScreen/NavigationScreen";
import FilterBar from "../components/Shop/FilterBar/FilterBar";
import ProductsShopBook from "../components/Shop/ProductsShopBook/ProductsShopBook";
// import { useAppDispatch } from "../hooks/useAppDispatch";
// import { useSearchParams } from "react-router-dom";
// import { getAllGoods } from "../redux/goods/operations";

const Shop = () => {
  // const dispatch = useAppDispatch();
  // const [searchParams] = useSearchParams();

  // const params = useMemo(
  //   () => Object.fromEntries([...searchParams]),
  //   [searchParams]
  // );
  // const { status, price } = params;
  
  // useEffect(() => {
  //   if(status){
  //     dispatch(getAllGoods({status: status}))  
  //   }
  //   if(price){
  //     dispatch(getAllGoods({price: +price}))
  //   }
  // }, [dispatch, status, price])
  

  return (
    <>
      <Loader />
      <div>
        <NavigationScreen />
        <FilterBar/>
        <ProductsShopBook />
        <AdvantagesMain />
      </div>
    </>
  );
};

export default Shop;
