import { useState } from "react";
import AdvantagesMain from "../components/Advantages/AdvantagesMain/AdvantagesMain";
import Loader from "../components/Loader/Loader";
import NavigationScreen from "../components/NavigationScreen/NavigationScreen";
import FilterBar from "../components/Shop/FilterBar/FilterBar";
import ProductsShopBook from "../components/Shop/ProductsShopBook/ProductsShopBook";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { changeListView } from "../redux/user/userSlice";

const Shop = () => {
  const dispatch = useAppDispatch();

	const setUpListView = (event: React.MouseEvent<HTMLButtonElement>) => {
		const { name } = event.currentTarget;
    dispatch(changeListView({view: name}))
	}

  return (
    <>
      <Loader />
      <div>
        <NavigationScreen />
        <FilterBar onClick={setUpListView}/>
        <ProductsShopBook />
        <AdvantagesMain />
      </div>
    </>
  );
};

export default Shop;
