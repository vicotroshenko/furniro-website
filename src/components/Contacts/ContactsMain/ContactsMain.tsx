import ContactsData from "../ContactsData/ContactsData"
import ContactsForm from "../ContactsForm/ContactsForm"
import ContactsTitle from "../ContactsTitle/ContactsTitle"
import "./ContactsMain.css"

const ContactsMain = () => {
	return (
		<section className="contacts-main-section">
			<div>
			<ContactsTitle/>
			<div className="contacts-m-doubl">
				<ContactsData/>
				<ContactsForm/>
			</div>
			</div>
		</section>
	)
}

export default ContactsMain