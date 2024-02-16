import { useEffect } from "react"
import ContactsMain from "../components/Contacts/ContactsMain/ContactsMain"
import Loader from "../components/Loader/Loader"
import NavigationScreen from "../components/NavigationScreen/NavigationScreen"


const Contacts = () => {

	useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

	return (
		<>
			<Loader/>
			<NavigationScreen/>
			<ContactsMain/>
		</>
	)
}

export default Contacts