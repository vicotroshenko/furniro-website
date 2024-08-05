import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  AdvantagesMain,
  FilterBar,
  Loader,
  NavigationScreen,
  ProductsShopBook,
} from '../components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getAllGoods, getAllTagsCategories } from '../redux/goods/operations';

const Shop = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const {
    status,
    price,
    tags,
    category,
    page = '1',
    limit,
  } = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllTagsCategories({ name: 'tags' }));
    dispatch(getAllTagsCategories({ name: 'category' }));
  }, [dispatch, page]);

  useEffect(() => {
    if (status) {
      dispatch(getAllGoods({ page, limit, status, tags, category }));
    }
    if (price) {
      dispatch(getAllGoods({ page, limit, price: '1', tags, category }));
    }
    if (!price && !status) {
      dispatch(getAllGoods({ page, limit, tags, category }));
    }
    if (tags || category) {
      dispatch(getAllGoods({ page, limit, tags, category }));
    }
  }, [dispatch, status, price, tags, category, page, limit]);

  return (
    <>
      <Loader />
      <div>
        <NavigationScreen />
        <FilterBar />
        <ProductsShopBook />
        <AdvantagesMain />
      </div>
    </>
  );
};

export default Shop;
