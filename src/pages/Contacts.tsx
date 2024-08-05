import { useEffect } from 'react';

import { ContactsMain, Loader, NavigationScreen } from '../components';

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader />
      <NavigationScreen />
      <ContactsMain />
    </>
  );
};

export default Contacts;
