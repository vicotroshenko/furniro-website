import { ICity, ICountry, IState } from "country-state-city";
import { ReactNode } from "react";

export interface IDataSlice {
  _id: string;
  title: string;
  description: string;
  price: string;
  tags?: string[];
  discount: string;
  status: string;
  amount?: number;
  size?: string;
  pictures: string[];
  colors?: string[];
  reviews?: IReview[];
  rating?: IRating[];
  general?: IGoodData[];
  product?: IGoodData[];
  dimensions?: IGoodData[];
  warranty?: object;
  category: string;
}

export interface ICart
  extends Pick<
    IDataSlice,
    "_id" | "title" | "price" | "amount" | "pictures" | "discount"
  > {
  buyAmount?: number;
  date?: string;
  totalPrice?: string;
}

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
  links?: string[];
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

export interface IProductCardProps  {
  onClickAddToCard?: () => void;
  item: IDataSlice;
}

export interface IProductCardChildProps extends IProductCardProps {
  isFavorite: (item: IDataSlice)=>any;
  isCompare: (item: IDataSlice)=>any;
  cart: ICart[];
  favorite: IDataSlice[];
  comparison: IDataSlice[]
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

export interface IItemButtonsPros {
  amount: number;
  onAdd?: () => void;
  onCompare?: () => void;
  isCompare?: boolean;
  isAdded?: boolean;
  getAmount:(amount:number) => void;
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

export interface ICartPageItemProps
  extends Pick<IDataSlice, "title" | "price"> {
  id: string;
  picture: string;
  buyAmount: number;
  totalPrice: string;
  onClick: () => void;
}

export interface ICartTotals {
  goods: ICart[];
}

export interface IModalCartContainProps
  extends Pick<ICartPageItemProps, "onClick"> {}

export interface IHeaderMobileButtonProps
  extends Pick<ICartPageItemProps, "onClick"> {
  itemsAmount?: number;
  hidden?: boolean;
  onToggleSearch?: () => void;
  onToggleFavorite?: () => void;
}

export interface IMobileModal {
  onClick: () => void;
  itemsAmount?: number;
  isOpenCartModal: () => void;
  onToggleSearch?: () => void;
  onToggleFavorite?: () => void;
}

export interface ISearchField extends Pick<ICartPageItemProps, "onClick"> {}

export interface ISearchShowItemProps {
  title: string;
  image: string;
  id: string;
}

export interface IModalFavoriteProps extends Pick<IMobileModal, "onClick"> {}

export interface ISelectData {
  countries?: ICountry[];
  states?: IState[];
  cities?: ICity[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  nameList: string;
  value: string;
  register?: any;
  errors?: any;
}

export interface ICheckoutFormValues {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  region: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
  additional: string;
}

export interface IReacHookProps {
  register: any;
  errors: any;
}

export interface IModal {
	visible?: boolean;
	children: ReactNode;
	toggle: () => void;
}
