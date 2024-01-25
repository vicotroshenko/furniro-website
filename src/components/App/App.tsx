import FooterMain from "../Footer/FooterMain/FooterMain";
import HeaderMain from "../Header/HeaderMain/HeaderMain";
import BrowseListSection from "../Main/BrowseTheRange/BrowseListSection/BrowseListSection";
import HeroMain from "../Main/Hero/HeroMain/HeroMain";
import SliderSectionMain from "../Main/SliderSection/SliderSectionMain/SliderSectionMain";


function App() {
  return (
    <div>
      <HeaderMain/>
      <HeroMain/>
      <BrowseListSection/>
      <SliderSectionMain/>
      <FooterMain/>
    </div>
  );
}

export default App;
