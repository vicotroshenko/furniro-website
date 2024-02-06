import { ICart } from "../types/types";

export const getSumPrice = (goods: ICart[]) => {
	const result = goods.reduce((acc: number, item: ICart) => {
		const price = item.totalPrice || item.price;
		acc += (item.buyAmount || 0) * +price;
		return acc;
	}, 0).toFixed(2);

	return +result;
};