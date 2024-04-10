import { Routes, Route } from 'react-router-dom';
import ItemPage from "../../pages/ItemPage";
import Contacts from "../../pages/Contacts";
import Main from "../../pages/Main";
import Shop from "../../pages/Shop";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Order from '../../pages/Order';
import NotFound from '../../pages/NotFound';
import SharedLayout from "../SharedLayout/SharedLayout";


function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Main/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="shop/:id" element={<ItemPage/>} />
        <Route path="contacts" element={<Contacts/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="checkout/order" element={<Order/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App;
