import axios from "axios";

axios.defaults.baseURL = "https://furniro-website-backend.onrender.com/api/";

interface ISort {
  page?: string;
  limit?: string;
  tags?: string;
  status?: string;
  category?: string;
  price?: string;
}
interface IReview {
  id?: string;
  author?: string;
  name: string;
  review: string;
  date?: string;
}

export const getAllGoods = async ({
  page = "1",
  limit = "9",
  tags = "",
  status = "",
  category = "",
  price = "",
}: ISort) => {
  try {
    const params = `page=${page}&limit=${limit}&price=${price}&status=${status}&tags[]=${tags}&category[]=${category}`;
    const response = await axios.get(`/furnitures?${params}`);

    return response.data;
  } catch (error: any) {
    return null;
  }
};

export const getOneById = async ({ id }: { id: string }) => {
  try {
    const response = await axios.get(`/furnitures/${id}`);
    return response.data;
  } catch (error: any) {
    return null;
  }
};

export const getAllTagsCategories = async ({ name }: { name: string }) => {
  try {
    const response = await axios.get(`/furnitures/info/${name}`);
    return { name: name, data: response.data };
  } catch (error: any) {
    return null;
  }
};



export const addReview = async ({
  id,
  data,
}: {
  id: string;
  data: IReview;
}) => {
  try {
    const response = await axios.post(`/furnitures/${id}/review`, data);
    return response.data;
  } catch (error: any) {
    return null;
  }
};
