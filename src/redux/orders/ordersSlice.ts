import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../../constants';
import { IOrdersSliceState } from '../types';
import initialState from './initialState';
import { addOrder, deleteOrder, getOrders, updateOrder } from './operations';

const setPending = (state: IOrdersSliceState, action: any) => {
  state.status = Status.loading;
};

const setRejected = (state: IOrdersSliceState, action: any) => {
  state.status = Status.error;
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, setPending);
    builder.addCase(addOrder.pending, setPending);
    builder.addCase(updateOrder.pending, setPending);
    builder.addCase(deleteOrder.pending, setPending);

    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.status = Status.success;
    });

    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.status = Status.success;
    });

    builder.addCase(updateOrder.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.status = Status.success;
    });

    builder.addCase(deleteOrder.fulfilled, (state, _action) => {
      state.orders = {};
      state.status = Status.success;
    });

    builder.addCase(getOrders.rejected, setRejected);
    builder.addCase(addOrder.rejected, setRejected);
    builder.addCase(updateOrder.rejected, setRejected);
    builder.addCase(deleteOrder.rejected, setRejected);
  },
});

const ordersReducer = ordersSlice.reducer;
export default ordersReducer;
