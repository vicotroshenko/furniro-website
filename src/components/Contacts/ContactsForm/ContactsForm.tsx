import { SubmitHandler, useForm } from "react-hook-form";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import "./ContactsForm.css";

interface IFormContacts {
  name: string,
  email: string,
  subject: string,
  message: string,
}

const ContactsForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormContacts>();

  const onSubmit: SubmitHandler<IFormContacts> = (data) => {
    alert("Your message is sent");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div role="group" className="contacts-f-formGroup">
        <label className="contacts-f-label">
          <span>Your name*</span>
          <input
            type="text"
            {...register("name", {required: true})}
            className="contacts-f-field"
            placeholder="Abc"
          />
          {errors.name && <span className="errorForms">*Name is required</span>}
        </label>
        <label className="contacts-f-label">
          <span>Email address*</span>
          <input
            type="email"
            {...register("email", {required: true})}
            className="contacts-f-field"
            placeholder="Abc@def.com"
          />
          {errors.email && <span className="errorForms">*Email is required</span>}
        </label>
        <label className="contacts-f-label">
          <span>Subject*</span>
          <input
            type="text"
            {...register("subject", {required: true})}
            className="contacts-f-field"
            placeholder="This is an optional"
          />
          {errors.subject && <span className="errorForms">*Subject is required</span>}
        </label>
        <label className="contacts-f-label">
          <span>Message*</span>
          <input
            type="text"
            {...register("message", {required: true})}
            className="contacts-f-field"
            placeholder="Hi! i`d like to ask about"
          />
          {errors.message && <span className="errorForms">*Message is required</span>}
        </label>
        <ButtonPrimary text="submit" type="submit" width={237} height={55} />
      </div>
    </form>
  );
};

export default ContactsForm;
