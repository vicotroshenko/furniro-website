import { useEffect } from 'react';

import Loader from '../components/Loader/Loader';
import BrowseListSection from '../components/Main/BrowseTheRange/BrowseListSection/BrowseListSection';
import HeroMain from '../components/Main/Hero/HeroMain/HeroMain';
import Products from '../components/Main/Products/Products';
import SliderSectionMain from '../components/Main/SliderSection/SliderSectionMain/SliderSectionMain';

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
