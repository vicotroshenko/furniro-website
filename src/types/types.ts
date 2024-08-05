export interface IDataSlice {
  _id: string;
  title: string;
  description: string;
  price: string;
  tags?: string[];
  discount: string;
  status: string;
  amount?: number;
  size?: string;
  pictures: string[];
  colors?: string[];
  reviews?: IReview[];
  rating?: IRating[];
  general?: IGoodData[];
  product?: IGoodData[];
  dimensions?: IGoodData[];
  warranty?: object;
  category: string;
}

export interface ICart
  extends Pick<
    IDataSlice,
    '_id' | 'title' | 'price' | 'amount' | 'pictures' | 'discount'
  > {
  buyAmount?: number;
  date?: string;
  totalPrice?: string;
}

export interface IGoodData {
  title: string;
  value: string;
}

export interface IRating {
  user: string;
  id: string;
  mark: number;
}

export interface IReview {
  id?: string;
  author?: string;
  name: string;
  review: string;
  date: string;
}
