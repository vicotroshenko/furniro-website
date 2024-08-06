import { Status } from '../constants';
import { ICart, IDataSlice } from '../types/types';

export interface IProductsInitialState {
  allGoods: IDataSlice[];
  status: keyof typeof Status;
  favorite: IDataSlice[];
  comparison: IDataSlice[];
  itemById: IDataSlice;
  tags: string[];
  category: string[];
  stats: number;
}

export interface IOrder {
  _id: string;
  orderNumber?: string;
  firstName: string;
  lastName: string;
  company?: string;
  country: string;
  region: string;
  city: string;
  zip?: string;
  phone: string;
  email: string;
  additional?: string;
  orderType: string;
  totalPrice: string;
  order: ICart[];
  createdAt?: string;
}

export interface IOrdersSliceState {
  orders: IOrder | {};
  status: keyof typeof Status;
}
