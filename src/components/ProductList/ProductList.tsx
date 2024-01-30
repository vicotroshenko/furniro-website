import { nanoid } from "nanoid"
import ProductCard from "../ProductCard/ProductCard"
import { IDataSlice } from "../../types/types";
import "./ProductList.css";
import { Link, useLocation } from "react-router-dom";

const getPriceOfItem = (price: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return price;
  }
  return Math.floor(+price - +price * (+discount / 100)).toString();
};

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
	return (
		<ul className="productsList">
		{items.map(({ title, price, pictures, status, discount, _id }: IDataSlice) => (
				<li key={nanoid()}>
					<Link to={`${path}${_id}`} style={{textDecoration: "none"}}>
					<ProductCard
						image={pictures[0]}
						discount={isNewItem(status, discount)}
						title={title}
						shortInfo="Shor info about..."
						firstPrice={isDiscount(price, discount)}
						discountPrice={getPriceOfItem(price, discount)}
					/>
					</Link>
				</li>
			)
		)}
	</ul>
	)
}

export default ProductList