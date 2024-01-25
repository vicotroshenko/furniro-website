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

export interface ISliderRadioButtonsProps {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => any;
	slide: string;
}

export interface IFooterLinksProps {
	title: string;
	links: string[];
}

export interface IAdvantagesItemProps extends 
	Pick<IFooterLinksProps, "title">, 
	Pick<IButtonProps, "text"> {
	icon: string;
}

export interface ISliderLink {
	number: number | string;
	place: string;
	name: string;
	link: string;
}

export interface IRangeItemProps {
	image: any;
	text: string;
	link: string;
}