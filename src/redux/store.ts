import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import goodsReducer from "./goods/goodsSlice";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";



export const store = configureStore({
	reducer: {
		goods: persistReducer({
			key: 'goods',
			storage,
		}, goodsReducer),
		cart: persistReducer({
			key: 'cart',
			storage,
		}, cartReducer),
		user: persistReducer({
			key: 'user',
			storage,
		}, userReducer),
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	}),
	devTools: process.env.NODE_ENV === "development",
})


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;