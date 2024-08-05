import { Route, Routes } from 'react-router-dom';

import { RoutKey } from '../../constants';
import {
  Cart,
  Checkout,
  Contacts,
  ItemPage,
  Main,
  NotFound,
  Order,
  Shop,
} from '../../pages';
import SharedLayout from '../SharedLayout/SharedLayout';

function App() {
  return (
    <Routes>
      <Route
        path={RoutKey.HOME}
        element={<SharedLayout />}
      >
        <Route
          index
          element={<Main />}
        />
        <Route
          path={RoutKey.SHOP}
          element={<Shop />}
        />
        <Route
          path={RoutKey.SHOP_ID}
          element={<ItemPage />}
        />
        <Route
          path={RoutKey.CONTACTS}
          element={<Contacts />}
        />
        <Route
          path={RoutKey.CART}
          element={<Cart />}
        />
        <Route
          path={RoutKey.CHECKOUT}
          element={<Checkout />}
        />
        <Route
          path={RoutKey.CHECKOUT_ORDER}
          element={<Order />}
        />
        <Route
          path={RoutKey.NOT_FOUND}
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;
