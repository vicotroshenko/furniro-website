import { useEffect } from 'react';

import CartList from '../components/Cart/CartList/CartList';
import Loader from '../components/Loader/Loader';
import NavigationScreen from '../components/NavigationScreen/NavigationScreen';

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader />
      <NavigationScreen />
      <CartList />
    </>
  );
};

export default Cart;
