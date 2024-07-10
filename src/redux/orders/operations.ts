import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://furniro-website-backend.onrender.com/api/';

interface ISortOrders {
  page?: number;
  limit?: number;
  tags?: string;
  status?: string;
  category?: string;
  price?: string;
  date?: string;
}

export const getOrders = createAsyncThunk(
  'orders/getAll',
  async (
    { page = 1, limit = 16, date = '-1', price = '' }: ISortOrders,
    thunkAPI
  ) => {
    try {
      const params = `page=${page}&limit=${limit}&price=${price}&date=${date}`;
      const response = await axios.get(`/orders?${params}`);
      console.log('get orders', response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (data: any, thunkAPI) => {
    try {
      console.log(data);
      const response = await axios.post(`/orders`, data);
      console.log('add orders', response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async ({ id, data }: any, thunkAPI) => {
    try {
      const response = await axios.put(`/orders/${id}`, data);
      console.log('update orders', response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async ({ id }: any, thunkAPI) => {
    try {
      await axios.delete(`/orders/${id}`);

      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
