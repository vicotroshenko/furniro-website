import { nanoid } from "nanoid"
import ProductCard from "../ProductCard/ProductCard"
import { ICart, IDataSlice } from '../../types/types';
import "./ProductList.css";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getPriceOfItem } from "../../helpers/getPriceOfItem";



const isDiscount = (price: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return "";
  }
  return price;
};

const isNewItem = (status: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return status;
  }
  return discount;
};

interface IproductListProps {
	items: IDataSlice[] | [];
}

const ProductList:React.FC<IproductListProps> = ({ items }) => {
	const location = useLocation();
	const path = location.pathname === "/" ? "/shop/" : "";

	const dispatch = useAppDispatch()

	const handleAddToCard = (item: ICart) => {
		const date = new Date();
		const newCardItem = {...item, buyAmoutn: 1, date: date.getDate(), price: getPriceOfItem(item.price, item.discount)}
		dispatch(addToCart(newCardItem))
	}

	return (
		<ul className="productsList">
		{items.map(({_id, pictures, title, price, discount, status, amount}: IDataSlice) => (
				<li key={nanoid()}>
					<Link to={`${path}${_id}`} style={{textDecoration: "none"}}>
					<ProductCard
						id={_id}
						image={pictures[0]}
						discount={isNewItem(status, discount)}
						title={title}
						shortInfo="Shor info about..."
						firstPrice={isDiscount(price, discount)}
						discountPrice={getPriceOfItem(price, discount)}
						onClickAddToCard={()=> handleAddToCard({_id, pictures, title, price, amount, discount})}
					/>
					</Link>
				</li>
			)
		)}
	</ul>
	)
}

export default ProductList