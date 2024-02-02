import AdvantagesMain from "../components/Advantages/AdvantagesMain/AdvantagesMain";
import Loader from "../components/Loader/Loader";
import NavigationScreen from "../components/NavigationScreen/NavigationScreen";
import ProductsShopBook from "../components/Shop/ProductsShopBook/ProductsShopBook";

const Shop = () => {
  return (
    <>
      <Loader />
      <div>
        <NavigationScreen />
        <ProductsShopBook />
        <AdvantagesMain />
      </div>
    </>
  );
};

export default Shop;
