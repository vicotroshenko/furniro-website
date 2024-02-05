import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../types/types";




interface ICartSliceState {
	goods: ICart[];
}

const initialState: ICartSliceState = {
	goods:[]
}


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
		addToCart(state, action) {
			state.goods = [...state.goods, action.payload];
		},
		updateCartItem(state, action){
			state.goods = state.goods.map(item => {
				if(item._id === action.payload.id){
					return {...item, ...action.payload}
				} else {
					return item;
				}
			})
		},
		deleteCartItem(state, action){
			state.goods = state.goods.filter(item => item._id !== action.payload.id);
		}
	},
});

const cartReducer = cartSlice.reducer;
export const { addToCart, updateCartItem, deleteCartItem } = cartSlice.actions;
export default cartReducer;