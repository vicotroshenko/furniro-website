import { createContext, useContext } from "react";
import { IProductsInitialState } from "../types/types";

export type Goods = {
	goodsState: IProductsInitialState;
	setGoodsState: React.Dispatch<React.SetStateAction<IProductsInitialState>>;
}

export const GoodsContext = createContext<Goods | undefined>(undefined);

export function useGoodsContext() {
	const goods = useContext(GoodsContext);

	if(goods === undefined){
		throw new Error("something wrong happened")
	}

	return goods;
}