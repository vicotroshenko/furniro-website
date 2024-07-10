import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import './ContactsData.css';
import ContactsDataItem from './ContactsDataItem/ContactsDataItem';

const ContactsData = () => {
  return (
    <div className="cont-d-container">
      <ContactsDataItem
        title="adress"
        text1="236 5th SE Avenue, New York NY10000, United States"
      >
        <FaLocationDot style={{ width: '30px', height: '30px' }} />
      </ContactsDataItem>

      <ContactsDataItem
        title="phone"
        text1="Mobile: +(84) 546-6789"
        text2="Mobile: +(84) 446-6789"
      >
        <FaPhoneAlt style={{ width: '30px', height: '30px' }} />
      </ContactsDataItem>

      <ContactsDataItem
        title="Working Time"
        text1="Monday-Friday: 9:00 - 22:00"
        text2="Saturday-Sunday: 9:00 - 21:00"
      >
        <FaClock style={{ width: '30px', height: '30px' }} />
      </ContactsDataItem>
    </div>
  );
};

export default ContactsData;
