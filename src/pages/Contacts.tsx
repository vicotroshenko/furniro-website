import ContactsMain from "../components/Contacts/ContactsMain/ContactsMain"
import Loader from "../components/Loader/Loader"
import NavigationScreen from "../components/NavigationScreen/NavigationScreen"


const Contacts = () => {
	return (
		<>
			<Loader/>
			<NavigationScreen/>
			<ContactsMain/>
		</>
	)
}

export default Contacts