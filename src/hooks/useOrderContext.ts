import { createContext, useContext } from "react";
import { ICart } from "../types/types";

interface IOrder {
	_id: string;
	orderNumber?: string;
	firstName: string,
	lastName: string,
	company?: string,
	country: string,
	region: string,
	city: string,
	zip?: string,
	phone: string,
	email: string,
	additional?: string,
	orderType: string,
	totalPrice: string;
	order: ICart[];
	createdAt?: string;
}

export interface IOrders {
	orders: IOrder| null;
	status: "loading" | "success" | "error";
}

export type Order = {
	orderState: IOrders;
	setOrderState: React.Dispatch<React.SetStateAction<IOrders>>;
}

export const OrderContext = createContext<Order | undefined>(undefined);

export function useOrderContext() {
	const order = useContext(OrderContext);

	if(order === undefined){
		throw new Error("something wrong happened")
	}

	return order;
}