import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from "./goodsSlice";
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



export const store = configureStore({
	reducer: {
		goods: persistReducer({
			key: 'goods',
			storage,
		}, goodsSlice),
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