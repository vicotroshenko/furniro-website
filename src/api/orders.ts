import axios from "axios";

axios.defaults.baseURL = "https://furniro-website-backend.onrender.com/api/";

interface ISortOrders {
  page?: number;
  limit?: number;
  tags?: string;
  status?: string;
  category?: string;
  price?: string;
  date?: string;
}

export const getOrders = async ({
  page = 1,
  limit = 16,
  date = "-1",
  price = "",
}: ISortOrders) => {
  try {
    const params = `page=${page}&limit=${limit}&price=${price}&date=${date}`;
    const response = await axios.get(`/orders?${params}`);

    return response.data;
  } catch (error: any) {
    return null;
  }
};

export const addOrder = async (data: any) => {
  try {
    const response = await axios.post(`/orders`, data);
    return response.data;
  } catch (error: any) {
    return null;
  }
};

export const updateOrder = async ({ id, data }: any) => {
  try {
    const response = await axios.put(`/orders/${id}`, data);
    return response.data;
  } catch (error: any) {
    return null;
  }
};

export const deleteOrder = async ({ id }: any) => {
  try {
    await axios.delete(`/orders/${id}`);
    return id;
  } catch (error: any) {
    return null;
  }
};
