import { memo, useCallback, useMemo } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { MdOutlineCompareArrows } from 'react-icons/md';

import { ViewParam } from '../../constants';
import { getPriceOfItem } from '../../helpers/getPriceOfItem';
import { isInCollection } from '../../helpers/isInCollection';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  addToComparison,
  addToFavorite,
  deleteFromComparison,
  deleteFromFavorite,
} from '../../redux/goods/goodsSlice';
import { IDataSlice } from '../../types/types';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import DiscountLabel from '../DiscountLabel/DiscountLabel';
import './ProductCard.css';
import './ProductCardLine.css';

const isDiscount = (price: string, discount: string): string => {
  if (discount === '0' || discount === '') {
    return '';
  }
  return price;
};

const isNewItem = (status: string, discount: string): string => {
  if (discount === '0' || discount === '') {
    return status;
  }
  return discount;
};

interface IProductCardProps {
  item: IDataSlice;
  view?: string;
  onClickAddToCard?: () => void;
}

const ProductCard: React.FC<IProductCardProps> = memo(
  ({ item, view, onClickAddToCard }) => {
    const { _id, pictures, title, status, discount, price, description } = item;

    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.goods);
    const { favorite, comparison } = useAppSelector((state) => state.goods);

    const isCompare = useCallback(
      (item: IDataSlice) => {
        if (isInCollection(_id, comparison)) {
          dispatch(deleteFromComparison({ id: _id }));
          return;
        }
        dispatch(addToComparison(item));
      },
      [_id, comparison, dispatch]
    );

    const isFavorite = useCallback(
      (item: IDataSlice) => {
        if (isInCollection(_id, favorite)) {
          dispatch(deleteFromFavorite({ id: _id }));
          return;
        }
        dispatch(addToFavorite(item));
      },
      [_id, favorite, dispatch]
    );

    const checkDiscount = useMemo(
      () => isNewItem(status, discount),
      [status, discount]
    );

    const priceOfItem = useMemo(
      () => getPriceOfItem(price, discount),
      [price, discount]
    );
    const isItemWithDiscount = useMemo(
      () => isDiscount(price, discount),
      [price, discount]
    );

    if (view === ViewParam.GRID || !view) {
      return (
        <div className="prodCardContainer">
          {checkDiscount !== '0' && checkDiscount !== '' && (
            <div className="prodCardDiscount">
              <DiscountLabel discount={checkDiscount} />
            </div>
          )}
          <div className="prodCardImage">
            <img
              src={pictures[0]}
              alt={title}
              className="image"
              loading="lazy"
            />
          </div>
          <div className="prodCardDesc">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="prodCardPrice">
              <p>{priceOfItem}</p>
              {isItemWithDiscount && <p>{isItemWithDiscount}</p>}
            </div>
          </div>
          <div className="prodCardHoverItem">
            <ButtonSecondary
              width={202}
              type="button"
              height={48}
              text={
                isInCollection(_id, cart) ? 'Already in card' : 'Add to cart'
              }
              onClick={onClickAddToCard}
              disabled={isInCollection(_id, cart)}
            />
            <div className="prodCardBtns">
              <button type="button">
                <IoMdShare className="prodCardIconBtn" />
                Share
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  isCompare(item);
                }}
                className={isInCollection(_id, comparison) ? 'checked' : ''}
              >
                <MdOutlineCompareArrows className="prodCardIconBtn" />
                Compare
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  isFavorite(item);
                }}
                className={isInCollection(_id, favorite) ? 'checked' : ''}
              >
                {isInCollection(_id, favorite) ? (
                  <FaHeart className="prodCardIconBtn" />
                ) : (
                  <FaRegHeart className="prodCardIconBtn" />
                )}
                Like
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="prodCardContainerLine">
          {checkDiscount !== '0' && checkDiscount !== '' && (
            <div className="prodCardDiscount">
              <DiscountLabel discount={checkDiscount} />
            </div>
          )}
          <div className="prodCardImageLine">
            <img
              src={pictures[0]}
              alt={title}
              className="image"
              loading="lazy"
            />
          </div>
          <div className="prodCardDescLine">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="prodCardPriceLine">
              <p>{priceOfItem}</p>
              {isItemWithDiscount && <p>{isItemWithDiscount}</p>}
            </div>
            <ButtonSecondary
              width={202}
              type="button"
              height={48}
              text={
                isInCollection(_id, cart) ? 'Already in card' : 'Add to cart'
              }
              onClick={onClickAddToCard}
              disabled={isInCollection(_id, cart)}
            />
            <div className="prodCardBtnsLine">
              <button type="button">
                <IoMdShare className="prodCardIconBtn" />
                Share
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  isCompare(item);
                }}
                className={isInCollection(_id, comparison) ? 'checked' : ''}
              >
                <MdOutlineCompareArrows className="prodCardIconBtn" />
                Compare
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  isFavorite(item);
                }}
                className={isInCollection(_id, favorite) ? 'checked' : ''}
              >
                {isInCollection(_id, favorite) ? (
                  <FaHeart className="prodCardIconBtn" />
                ) : (
                  <FaRegHeart className="prodCardIconBtn" />
                )}
                Like
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default ProductCard;
