import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://furniro-website-backend.onrender.com/api/";

interface ISort {
  page?: number;
  limit?: number;
  tags?: string[];
  status?: string;
  category?: string[];
  price?: string;
}

export const getAllGoods = createAsyncThunk(
  "goods/getAll",
  async (
    {
      page = 1,
      limit = 16,
      tags = [],
      status = "",
      category = [],
      price = "",
    }: ISort,
    thunkAPI
  ) => {
    try {
      const parmas = `page=${page}&limit=${limit}&price=${price}&status=${status}`;
      let body = {};
      if(tags.length !== 0){
        body= {tags};
      }
      if(category.length !== 0){
        body = {category}
      }
      console.log(body);
      const response = await axios.get(`/furnitures?${parmas}`, {data:{...body}});
      console.log(response);
      
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