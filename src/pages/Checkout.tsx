import { useEffect } from 'react';

import { CheckoutMain } from '../components';

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CheckoutMain />
    </>
  );
};

export default Checkout;
