import AdvantagesMain from "../components/Advantages/AdvantagesMain/AdvantagesMain"
import NavigationScreen from "../components/NavigationScreen/NavigationScreen"
import ProductsShopBook from "../components/Shop/ProductsShopBook/ProductsShopBook"

const Shop = () => {
	return (
		<div>
			<NavigationScreen/>
			<ProductsShopBook/>
			<AdvantagesMain/>
		</div>
	)
}

export default Shop