import HeroMain from '../components/Main/Hero/HeroMain/HeroMain'
import BrowseListSection from '../components/Main/BrowseTheRange/BrowseListSection/BrowseListSection'
import Products from '../components/Main/Products/Products'
import SliderSectionMain from '../components/Main/SliderSection/SliderSectionMain/SliderSectionMain'
import Loader from '../components/Loader/Loader'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { useEffect } from 'react'
import { getAllGoods } from '../redux/goods/operations'

const Main = () => {

	const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.goods.allGoods);

  useEffect(() => {
    if(items.length === 0){
      dispatch(getAllGoods({}));
    }
  }, [dispatch, items.length]);

	return (
		<>
		<Loader/>
		<div>
			<HeroMain/>
      <BrowseListSection/>
      <Products/>
      <SliderSectionMain/>
		</div>
		</>
	)
}

export default Main