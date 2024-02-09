import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://furniro-website-backend.onrender.com/api/";

interface ISort {
  page?: number;
  limit?: number;
  tags?: string;
  status?: "new" | "discount";
  category?: string;
  price?: 1 | -1;
}


export const getAllGoods = createAsyncThunk(
  "goods/getAll",
  async (
    { page = 1, limit = 8, tags, status, category, price }: ISort,
    thunkAPI
  ) => {
    try {
      const response = await axios.get(
        `furnitures?page=${page}&limit=${limit || 8}&tags=${tags}&status=${status}&category=${category}&price=${price}`
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