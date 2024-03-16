import { createContext, useContext } from "react";
import { ICart } from "../types/types";

export type Cart = {
	cartState: {goods: ICart[]};
	setCartState: React.Dispatch<React.SetStateAction<{goods: ICart[]}>>;
}

export const CartContext = createContext<Cart | undefined>(undefined);

export function useCartContext() {
	const cart = useContext(CartContext);

	if(cart === undefined){
		throw new Error("something wrong happened")
	}

	return cart;
}