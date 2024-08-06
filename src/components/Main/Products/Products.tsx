import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { getAllGoods } from '../../../redux/goods/operations';
import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary';
import ProductList from '../../ProductList/ProductList';
import './Products.css';

const Products = () => {
  const [showCount, setShowCount] = useState<string>('9');
  const step = 6;
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.goods.allGoods);

  useEffect(() => {
    dispatch(getAllGoods({ page: '1', limit: showCount }));
  }, [dispatch, showCount]);

  const handleClick = useCallback(() => {
    if (showCount > items.length) {
      return;
    }
    setShowCount((prev) => prev + step);
  }, [items.length, showCount]);

  return (
    <section className="productsSection">
      <div className="productsContainer">
        <h2>our products</h2>
        <ProductList items={items} />
        <div className="productsMoreButtonWrap">
          <ButtonSecondary
            type="button"
            width={245}
            height={48}
            text="Show more"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
