import { createSlice } from "@reduxjs/toolkit";
import { getAllGoods } from "../goods/operations";
import { IDataSlice } from "../../types/types";

interface IProductsInitialState {
	allGoods: IDataSlice[];
  status: "loading" | "success" | "error";
}

const initialState: IProductsInitialState = {
	allGoods: [],
  status: "success",
};

const goodsSlice = createSlice({
  name: "goods",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGoods.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      getAllGoods.fulfilled,
      (state, action) => {
        state.allGoods = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(
      getAllGoods.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );
  },
});

const goodsReducer = goodsSlice.reducer;
export default goodsReducer;