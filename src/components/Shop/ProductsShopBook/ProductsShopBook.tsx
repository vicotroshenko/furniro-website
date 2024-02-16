import { useMemo } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import ProductList from "../../ProductList/ProductList";
import "./ProductsShopBook.css";
import { useSearchParams } from "react-router-dom";

const ProductsShopBook = () => {
	const items = useAppSelector((state) => state.goods.allGoods);
	const [searchParams] = useSearchParams();

	const {show} = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

	const showItemAmount = (collection:any, num:string) => {
		return collection.slice(1, +num+1);
	}

	return (
		<section className="shopProductsSection">
			<div className="shopProductsContainer">
				<ProductList items={showItemAmount(items, show)} />
			</div>
		</section>
	)
}

export default ProductsShopBook