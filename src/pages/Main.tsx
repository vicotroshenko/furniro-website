import { useEffect } from 'react';

import {
  BrowseListSection,
  HeroMain,
  Loader,
  Products,
  SliderSectionMain,
} from '../components';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader />
      <div>
        <HeroMain />
        <BrowseListSection />
        <Products />
        <SliderSectionMain />
      </div>
    </>
  );
};

export default Main;
