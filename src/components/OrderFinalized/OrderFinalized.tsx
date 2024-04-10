import { GoCheckCircleFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import "./OrderFinalized.css"

const OrderFinalized = () => {
	const orders = useAppSelector(state => state.orders.orders);

	return (
		<section className="orderFinalSection">
			<div className="orderFinalContainer">
				<h1>Order details</h1>
				<div className="orderFinalImageContainer">
					<GoCheckCircleFill/>
				</div>
				<p className="orderFinalGratitude">Thank you. Your order has been placed!</p>
				<p className="orderFinalInfo">Your order number is - <span>{orders.orderNumber}</span>.</p>
				<NavLink to={"/shop"} className="orderFinalLink">Continue shoping</NavLink>
			</div>
		</section>
	)
}

export default OrderFinalized