import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://furniro-website-backend.onrender.com/api/";

interface ISort {
  page?: string;
  limit?: string;
  tags?: string;
  status?: string;
  category?: string;
  price?: string;
}

export const getAllGoods = createAsyncThunk(
  "goods/getAll",
  async (
    {
      page = "1",
      limit = "9",
      tags = "",
      status = "",
      category = "",
      price = "",
    }: ISort,
    thunkAPI
  ) => {
    try {
      const params = `page=${page}&limit=${limit}&price=${price}&status=${status}&tags[]=${tags}&category[]=${category}`;
      const response = await axios.get(`/furnitures?${params}`);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const getOneById = createAsyncThunk(
  "goods/getById",
  async ({ id }: { id: string }, thunkAPI) => {
    try {
      const response = await axios.get(`/furnitures/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);


export const getAllTagsCategories = createAsyncThunk(
  "goods/getTagsCategories",
  async ({ name }: { name: string }, thunkAPI) => {
    try {
      const response = await axios.get(`/furnitures/info/${name}`);

      return {name: name, data: response.data};
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

interface IReview {
  id?: string;
  author?: string;
  name: string;
  review: string;
  date?: string;
}

export const addReview = createAsyncThunk(
  "goods/addReviw",
  async ({id, data}:{id:string, data:IReview}, thunkAPI) => {
    try {
      const response = await axios.post(`/furnitures/${id}/review`, data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);