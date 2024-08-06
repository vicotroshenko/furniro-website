import { Status } from '../../constants';
import { IOrdersSliceState } from '../types';

const initialState: IOrdersSliceState = {
  orders: {},
  status: Status.success,
};

export default initialState;
