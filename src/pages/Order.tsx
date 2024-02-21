import { useEffect } from "react";
import OrderFinalized from "../components/OrderFinalized/OrderFinalized"


const Order = () => {

	useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

	return (
		<>
			<OrderFinalized/>
		</>
	)
}

export default Order