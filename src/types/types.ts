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

export interface IProductCardProps {
  image: string;
  discount: string | number;
  title: string;
  shortInfo: string;
  firstPrice: string;
  discountPrice: string;
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
  rewiew: string;
  date?: Date;
}
export interface IDataSlice {
  title: string;
  description: string;
  price: string;
  tags?: string[];
  discount: string;
  status: string;
  amount: number;
  size: string;
  pictures: string[];
  colors: string[];
  reviews: IReview[];
  rating: IRating[];
  general: IGoodData[];
  product: IGoodData[];
  dimensions: IGoodData[];
  warranty: object;
  category: string;
}