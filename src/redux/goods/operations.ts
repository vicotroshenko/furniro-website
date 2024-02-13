import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://furniro-website-backend.onrender.com/api/";

interface ISort {
  page?: number;
  limit?: number;
  tags?: string;
  status?: string;
  category?: string;
  price?: number;
}


export const getAllGoods = createAsyncThunk(
  "goods/getAll",
  async (
    { page = 1, limit = 8, tags, status, category, price }: ISort,
    thunkAPI
  ) => {
    try {
      console.log(status);
      const response = await axios.get(
        `/furnitures?price=-1`
      );

      console.log("data", response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);


export const getOneById = createAsyncThunk(
  "goods/getById",
  async (
    { id }:{id:string},
    thunkAPI
  ) => {
    try {
      const response = await axios.get(`furnitures/${id}`);
      console.log("data", response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  })