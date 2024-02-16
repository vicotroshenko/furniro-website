import { createSlice } from "@reduxjs/toolkit";
import { getAllGoods, getAllTagsCategories, getOneById } from "../goods/operations";
import { IDataSlice } from "../../types/types";

interface IProductsInitialState {
	allGoods: IDataSlice[];
  status: "loading" | "success" | "error";
  favorite: IDataSlice[];
  comparison: IDataSlice[];
  itemById: IDataSlice | {};
  tags: string[];
  category: string[];
}

const initialState: IProductsInitialState = {
	allGoods: [],
  status: "success",
  favorite: [],
  comparison: [],
  itemById: {},
  tags:[],
  category: [],
};

const goodsSlice = createSlice({
  name: "goods",
  initialState: initialState,
  reducers: {
    addToFavorite(state, action) {
			state.favorite = [...state.favorite, action.payload];
		},
    deletFromFavotite(state, action) {
      state.favorite = state.favorite.filter(item => item._id !== action.payload.id)
    },
    addToComparison(state, action) {
			state.comparison = [...state.favorite, action.payload];
		},
    deletFromComparison(state, action) {
      state.comparison = state.comparison.filter(item => item._id !== action.payload.id)
    },
  },
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
    builder.addCase(getOneById.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      getOneById.fulfilled,
      (state, action) => {
        state.itemById = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(
      getOneById.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );
    builder.addCase(getAllTagsCategories.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      getAllTagsCategories.fulfilled,
      (state, action) => {
        const name = action.payload.name === "tags" ? "tags": "category";
        state[name] = action.payload.data;
        state.status = "success";
      }
    );
    builder.addCase(
      getAllTagsCategories.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );
  },
});

const goodsReducer = goodsSlice.reducer;
export const {
  addToFavorite,
  deletFromFavotite,
  addToComparison,
  deletFromComparison,
} = goodsSlice.actions;
export default goodsReducer;