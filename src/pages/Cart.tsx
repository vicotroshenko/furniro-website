import { useEffect } from 'react';

import { CartList, Loader, NavigationScreen } from '../components';

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
