import { Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import Main from "../../pages/Main";
import Shop from "../../pages/Shop";
import ItemPage from "../../pages/ItemPage";
import Contacts from "../../pages/Contacts";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Order from "../../pages/Order";
import NotFound from "../../pages/NotFound";
import { useMemo, useState } from "react";
import { GoodsContext } from "../../hooks/useGoodsContext";
import { ICart, IProductsInitialState } from "../../types/types";
import { CartContext } from "../../hooks/useCartContext";
import { IOrders, OrderContext } from "../../hooks/useOrderContext";

const initialGoodsState: IProductsInitialState = {
  allGoods: [],
  status: "success",
  favorite: [],
  comparison: [],
  itemById: {
    _id: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    status: "",
    pictures: [],
    category: "",
  },
  tags: [],
  category: [],
  stats: 0,
};

const initialState: IOrders = {
  orders: null,
  status: "success",
};

function App() {
  const [goodsState, setGoodsState] = useState(initialGoodsState);
  const [cartState, setCartState] = useState<{ goods: ICart[] }>({ goods: [] });
  const [orderState, setOrderState] = useState(initialState);

  const goodsValues = useMemo(
    () => ({ goodsState, setGoodsState }),
    [goodsState]
  );

  const cartValues = useMemo(() => ({ cartState, setCartState }), [cartState]);

  const orderValues = useMemo(
    () => ({ orderState, setOrderState }),
    [orderState]
  );

  return (
    <>
      <OrderContext.Provider value={orderValues}>
        <CartContext.Provider value={cartValues}>
          <GoodsContext.Provider value={goodsValues}>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Main />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:id" element={<ItemPage />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="checkout/order" element={<Order />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </GoodsContext.Provider>
        </CartContext.Provider>
      </OrderContext.Provider>
    </>
  );
}

export default App;
