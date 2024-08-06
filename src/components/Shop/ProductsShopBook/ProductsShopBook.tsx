import { Pagination } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/useAppSelector';
import ProductList from '../../ProductList/ProductList';
import './ProductsShopBook.css';

const ProductsShopBook = () => {
  const items = useAppSelector((state) => state.goods.allGoods);
  const [searchParams, setSearchParams] = useSearchParams();
  const stats = useAppSelector((state) => state.goods.stats);

  const allParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const changePage = useCallback(
    (e: any, page: number) => {
      setSearchParams({ ...allParams, page: page.toString() });
    },
    [allParams, setSearchParams]
  );

  const pages = Math.ceil(stats / +allParams.limit);

  return (
    <section className="shopProductsSection">
      <div className="shopProductsContainer">
        <ProductList items={items} />
        <div className="shopProducts_pagination">
          <Pagination
            count={pages}
            page={+allParams.page}
            onChange={changePage}
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsShopBook;
