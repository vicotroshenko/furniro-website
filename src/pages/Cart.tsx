import CartList from "../components/Cart/CartList/CartList";
import Loader from "../components/Loader/Loader";
import NavigationScreen from "../components/NavigationScreen/NavigationScreen";

const Cart = () => {
  return (
    <>
      <Loader />
      <NavigationScreen />
      <CartList />
    </>
  );
};

export default Cart;
