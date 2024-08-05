import { Route, Routes } from 'react-router-dom';

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
        path="/"
        element={<SharedLayout />}
      >
        <Route
          index
          element={<Main />}
        />
        <Route
          path="shop"
          element={<Shop />}
        />
        <Route
          path="shop/:id"
          element={<ItemPage />}
        />
        <Route
          path="contacts"
          element={<Contacts />}
        />
        <Route
          path="cart"
          element={<Cart />}
        />
        <Route
          path="checkout"
          element={<Checkout />}
        />
        <Route
          path="checkout/order"
          element={<Order />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;
