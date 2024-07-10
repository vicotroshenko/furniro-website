import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cartSlice';
import goodsReducer from './goods/goodsSlice';
import ordersReducer from './orders/ordersSlice';

export const store = configureStore({
  reducer: {
    goods: persistReducer(
      {
        key: 'goods',
        storage,
        blacklist: ['itemById'],
      },
      goodsReducer
    ),
    cart: persistReducer(
      {
        key: 'cart',
        storage,
      },
      cartReducer
    ),
    orders: persistReducer(
      {
        key: 'orders',
        storage,
        blacklist: ['status'],
      },
      ordersReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
