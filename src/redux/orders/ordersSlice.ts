import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../types/types";
import { addOrder, deleteOrder, getOrders, updateOrder } from "./operations";

interface IOrder {
	_id: string;
	orderNumber?: string;
	firstName: string,
	lastName: string,
	company?: string,
	country: string,
	region: string,
	city: string,
	zip?: string,
	phone: string,
	email: string,
	additional?: string,
	orderType: string,
	totalPrice: string;
	order: ICart[];
	createdAt?: string;
}


interface IOrdersSliceState {
	orders: IOrder | {};
	status: "loading" | "success" | "error";
}


const initialState: IOrdersSliceState = {
	orders: {},
	status: "success",
}


const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
	extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      getOrders.fulfilled,
      (state, action) => {
        state.orders = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(
      getOrders.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );

		builder.addCase(addOrder.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      addOrder.fulfilled,
      (state, action) => {
        state.orders = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(
      addOrder.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );

		builder.addCase(updateOrder.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      updateOrder.fulfilled,
      (state, action) => {
        state.orders = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(
      updateOrder.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );

		builder.addCase(deleteOrder.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      deleteOrder.fulfilled,
      (state, _action) => {
        state.orders = {};
        state.status = "success";
      }
    );
    builder.addCase(
      deleteOrder.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );
	}

	
});

const ordersReducer = ordersSlice.reducer;
export default ordersReducer;