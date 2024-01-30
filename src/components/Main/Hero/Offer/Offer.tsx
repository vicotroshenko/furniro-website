
import ButtonPrimary from "../../../ButtonPrimary/ButtonPrimary"
import "./Offer.css"

const Offer = () => {
	return (
		<div className="offerContainer">
			<span className="offerUptext">New Arrival</span>
			<p className="offerTitle">Discover Our New collection</p>
			<p className="offerUndertext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
			<ButtonPrimary width={222} type="button" height={74} text="buy now"/>
		</div>
	)
}

export default Offer