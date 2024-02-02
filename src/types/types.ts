export interface IButtonProps {
  width: number;
  height: number;
  text: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => any;
  disabled?: boolean;
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

export interface IAdvantagesItemProps
  extends Pick<IFooterLinksProps, "title">,
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
  id: string;
  image: string;
  discount: string | number;
  title: string;
  shortInfo: string;
  firstPrice: string;
  discountPrice: string;
  onClickAddToCard?: () => void;
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
export interface IDataSlice {
  _id: string;
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

export interface IItemButtonsPros {
  amount: number;
  onAmount?: () => React.MouseEvent<HTMLButtonElement>;
  onAdd?: () => React.MouseEvent<HTMLButtonElement>;
  onCompare?: () => React.MouseEvent<HTMLButtonElement>;
}

export interface IItemDescribe
  extends Pick<IDataSlice, "title" | "description" | "price" | "reviews"> {
  rating?: number;
}

export interface IItemImageParadeProps {
  pictures: string[];
}

export interface IItemShortDesc extends Pick<IDataSlice, "tags" | "category"> {}

export interface IItemInnerProps {
  item: IDataSlice;
}

export interface ICart
  extends Pick<IDataSlice, "_id" | "title" | "price" | "amount" | "pictures" | "discount"> {
  buyAmount?: number;
  date?: string;
  totalPrice?: string;
}

export interface ICartPageItemProps extends Pick<IDataSlice, "title" | "price" > {
  id: string;
  picture: string;
  buyAmount: number;
  totalPrice: string;
  onClick: () => void;
}

export interface ICartTotals {
  goods: ICart[];
}