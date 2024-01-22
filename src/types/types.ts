export interface IButtonProps {
	width: number;
	height: number;
	text: string;
	onClick?: ()=> any;
}

export interface IDiscountLabelProps {
	discount: string | number;
}

export interface IDiscountLableStyles {
	background: string;
	discountStatus: boolean;
}