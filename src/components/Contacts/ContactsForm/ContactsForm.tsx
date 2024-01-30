import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import "./ContactsForm.css";
import { useState } from "react";

interface IFormContacts {
  [x: string]: string;
}

const ContactsForm = () => {
  const [data, setData] = useState<IFormContacts>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmitForm = () => {
    const datJSON = JSON.stringify(data);
    alert(datJSON);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div role="group" className="contacts-f-formGroup">
        <label className="contacts-f-label">
          <span>Your name</span>
          <input
            type="text"
            value={data.name}
            name="name"
            className="contacts-f-field"
            placeholder="Abc"
            onChange={handleInputData}
          />
        </label>
        <label className="contacts-f-label">
          <span>Email address</span>
          <input
            type="email"
            value={data.email}
            name="email"
            className="contacts-f-field"
            placeholder="Abc@def.com"
            onChange={handleInputData}
          />
        </label>
        <label className="contacts-f-label">
          <span>Subject</span>
          <input
            type="text"
            value={data.subject}
            name="subject"
            className="contacts-f-field"
            placeholder="This is an optional"
            onChange={handleInputData}
          />
        </label>
        <label className="contacts-f-label">
          <span>Message</span>
          <input
            type="text"
            value={data.message}
            name="message"
            className="contacts-f-field"
            placeholder="Hi! i`d like to ask about"
            onChange={handleInputData}
          />
        </label>
        <ButtonPrimary text="submit" type="submit" width={237} height={55} />
      </div>
    </form>
  );
};

export default ContactsForm;
