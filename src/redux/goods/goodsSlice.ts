import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { DynamicParam, Status } from '../../constants';
import {
  addReview,
  getAllGoods,
  getAllTagsCategories,
  getOneById,
} from '../goods/operations';
import { IProductsInitialState } from '../types';
import initialState from './initialState';

const setPending = (state: IProductsInitialState, action: PayloadAction) => {
  state.status = Status.loading;
};

const setRejected = (state: IProductsInitialState, action: any) => {
  state.status = Status.error;
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      state.favorite = [...state.favorite, action.payload];
    },
    deleteFromFavorite(state, action) {
      state.favorite = state.favorite.filter(
        (item) => item._id !== action.payload.id
      );
    },
    addToComparison(state, action) {
      state.comparison = [...state.favorite, action.payload];
    },
    deleteFromComparison(state, action) {
      state.comparison = state.comparison.filter(
        (item) => item._id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGoods.pending, setPending);
    builder.addCase(getOneById.pending, setPending);
    builder.addCase(getAllTagsCategories.pending, setPending);
    builder.addCase(addReview.pending, setPending);

    builder.addCase(getAllGoods.fulfilled, (state, action) => {
      state.allGoods = action.payload.result;
      state.stats = action.payload.summary;
      state.status = Status.success;
    });
    builder.addCase(getOneById.fulfilled, (state, action) => {
      state.itemById = action.payload;
      state.status = Status.success;
    });
    builder.addCase(getAllTagsCategories.fulfilled, (state, action) => {
      const name =
        action.payload.name === DynamicParam.TAGS
          ? DynamicParam.TAGS
          : DynamicParam.CATEGORY;
      state[name] = action.payload.data;
      state.status = Status.success;
    });

    builder.addCase(addReview.fulfilled, (state, action) => {
      state.itemById.reviews?.push(action.payload);
      state.status = Status.success;
    });

    builder.addCase(getAllGoods.rejected, setRejected);
    builder.addCase(getOneById.rejected, setRejected);
    builder.addCase(getAllTagsCategories.rejected, setRejected);
    builder.addCase(addReview.rejected, setRejected);
  },
});

const goodsReducer = goodsSlice.reducer;
export const {
  addToFavorite,
  deleteFromFavorite,
  addToComparison,
  deleteFromComparison,
} = goodsSlice.actions;
export default goodsReducer;
