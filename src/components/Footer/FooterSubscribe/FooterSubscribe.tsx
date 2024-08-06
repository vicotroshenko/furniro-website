import { useCallback, useState } from 'react';

import './FooterSubscribe.css';

const FooterSubscribe = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubscribeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChangeField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
    },
    []
  );

  return (
    <>
      <p className="subTitle">Newsletter</p>
      <form
        onSubmit={handleSubscribeSubmit}
        className="subForm"
      >
        <input
          type="email"
          name="email"
          defaultValue={email}
          placeholder="Enter Your Email Address"
          onChange={handleChangeField}
          className="footerEmailField"
        />
        <button
          type="submit"
          className="footerBtn"
        >
          subscribe
        </button>
      </form>
    </>
  );
};

export default FooterSubscribe;
