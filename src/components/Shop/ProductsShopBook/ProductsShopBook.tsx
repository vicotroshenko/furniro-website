import { useAppSelector } from "../../../hooks/useAppSelector";
import ProductList from "../../ProductList/ProductList";
import "./ProductsShopBook.css";

const ProductsShopBook = () => {
	const items = useAppSelector((state) => state.goods.allGoods);
	return (
		<section className="shopProductsSection">
			<div className="shopProductsContainer">
				<ProductList items={items} />
			</div>
		</section>
	)
}

export default ProductsShopBook