import { useMemo } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import ProductList from "../../ProductList/ProductList";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import "./ProductsShopBook.css";


const ProductsShopBook = () => {
	const items = useAppSelector((state) => state.goods.allGoods);
	const [searchParams, setSearchParams] = useSearchParams();
	const stats = useAppSelector(state => state.goods.stats);

	const allParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
	
	
	const changePage = (e:any, page: number)=> {
		setSearchParams({ ...allParams, page: page.toString() });
	}

	const pages = Math.ceil(stats / +allParams.limit);

	return (
		<section className="shopProductsSection">
			<div className="shopProductsContainer">
				<ProductList items={items}/>
				<div style={{margin: "0 auto", paddingTop: "22px"}}>
					<Pagination count={pages} page={+allParams.page} onChange={changePage} showFirstButton showLastButton />
				</div>
			</div>
		</section>
	)
}

export default ProductsShopBook