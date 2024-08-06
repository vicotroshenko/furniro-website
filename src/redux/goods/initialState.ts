import { Status } from '../../constants';
import { IProductsInitialState } from '../types';

const initialState: IProductsInitialState = {
  allGoods: [],
  status: Status.success,
  favorite: [],
  comparison: [],
  itemById: {
    _id: '',
    title: '',
    description: '',
    price: '',
    discount: '',
    status: '',
    pictures: [],
    category: '',
  },
  tags: [],
  category: [],
  stats: 0,
};

export default initialState;
