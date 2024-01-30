import { ReactNode } from "react";
import "./ContactsDataItem.css";

interface IContactsDataItemProps {
  children: ReactNode;
  title: string;
  text1: string;
  text2?: string;
}

const ContactsDataItem: React.FC<IContactsDataItemProps> = ({
  children,
  title,
  text1,
  text2,
}) => {
  return (
    <div className="cont-di-container">
      <div>{children}</div>
      <div className="cont-di-contacts">
        <h3>{title}</h3>
        <p>{text1}</p>
        {text2 && <p>{text2}</p>}
      </div>
    </div>
  );
};

export default ContactsDataItem;
