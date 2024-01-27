import HeroMain from '../components/Main/Hero/HeroMain/HeroMain'
import BrowseListSection from '../components/Main/BrowseTheRange/BrowseListSection/BrowseListSection'
import Products from '../components/Main/Products/Products'
import SliderSectionMain from '../components/Main/SliderSection/SliderSectionMain/SliderSectionMain'

const Main = () => {
	return (
		<div>
			<HeroMain/>
      <BrowseListSection/>
      <Products/>
      <SliderSectionMain/>
		</div>
	)
}

export default Main