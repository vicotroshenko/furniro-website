import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getPriceOfItem } from '../../helpers/getPriceOfItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addToCart } from '../../redux/cart/cartSlice';
import { ICart, IDataSlice } from '../../types/types';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList: React.FC<{ items: IDataSlice[] | [] }> = ({ items }) => {
  const location = useLocation();
  const path = location.pathname === '/' ? '/shop/' : '';
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const { view } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const handleAddToCard = (item: ICart) => {
    const date = new Date();
    const newCardItem = {
      ...item,
      buyAmount: 1,
      date: date.toString(),
      price: getPriceOfItem(item.price, item.discount),
    };
    dispatch(addToCart(newCardItem));
  };

  return (
    <ul
      className={view === 'grid' || !view ? 'productsList' : 'productsListLine'}
    >
      {items.length !== 0 &&
        items.map(
          (
            { _id, pictures, title, price, amount, discount }: IDataSlice,
            index,
            array
          ) => (
            <li key={nanoid()}>
              <Link
                to={`${path}${_id}`}
                style={{ textDecoration: 'none' }}
              >
                <ProductCard
                  onClickAddToCard={() =>
                    handleAddToCard({
                      _id,
                      pictures,
                      title,
                      price,
                      amount,
                      discount,
                    })
                  }
                  item={array[index]}
                  view={view}
                />
              </Link>
            </li>
          )
        )}
    </ul>
  );
};

export default ProductList;
