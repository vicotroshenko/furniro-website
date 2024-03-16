import { IDataSlice } from "../../types/types";
import { isInCollection } from "../../helpers/isInCollection";
import DiscountLabel from "../DiscountLabel/DiscountLabel";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getPriceOfItem } from "../../helpers/getPriceOfItem";
import "./ProductCard.css";
import "./ProductCardLine.css";
import { useCartContext } from "../../hooks/useCartContext";
import { useGoodsContext } from "../../hooks/useGoodsContext";

const isDiscount = (price: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return "";
  }
  return price;
};

const isNewItem = (status: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return status;
  }
  return discount;
};

interface IProductCardProps {
  onClickAddToCard?: () => void;
  item: IDataSlice;
  view?: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  item,
  onClickAddToCard,
  view,
}) => {
  const { _id, pictures, title, status, discount, price, description } = item;

  const { cartState } = useCartContext();
  const { goodsState, setGoodsState } = useGoodsContext();

  const isCompare = (comparingItem: IDataSlice) => {
    if (isInCollection(_id, goodsState.comparison)) {
      const comparison = goodsState.comparison.filter(item => item._id !== comparingItem._id);
      setGoodsState(prev => ({...prev, comparison}));
    } else {
      setGoodsState(prev => ({...prev, comparison:[...prev.comparison, comparingItem]}));
    }
  };

  const isFavorite = (favoriteItem: IDataSlice) => {
    if (isInCollection(_id, goodsState.favorite)) {
      const favorite = goodsState.favorite.filter(item => item._id !== favoriteItem._id);
      setGoodsState(prev => ({...prev, favorite}));
    } else {
      setGoodsState(prev => ({...prev, favorite:[...prev.favorite, favoriteItem]}));
    }
  };

  const checkDiscount = isNewItem(status, discount);

  if (view === "grid" || !view) {
    return (
      <div className="prodCardContainer">
        {checkDiscount !== "0" && checkDiscount !== "" && (
          <div className="prodCardDiscount">
            <DiscountLabel discount={checkDiscount} />
          </div>
        )}
        <div className="prodCardImage">
          <img src={pictures[0]} alt={title} className="image" loading="lazy" />
        </div>
        <div className="prodCardDesc">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="prodCardPrice">
            <p>{getPriceOfItem(price, discount)}</p>
          {isDiscount(price, discount) && <p>{isDiscount(price, discount)}</p>}
          </div>
        </div>
        <div className="prodCardHoverItem">
          <ButtonSecondary
            width={202}
            type="button"
            height={48}
            text={isInCollection(_id, cartState.goods) ? "Already in card" : "Add to cart"}
            onClick={onClickAddToCard}
            disabled={isInCollection(_id, cartState.goods)}
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
              className={isInCollection(_id, goodsState.comparison) ? "checked" : ""}
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
              className={isInCollection(_id, goodsState.favorite) ? "checked" : ""}
            >
              {isInCollection(_id, goodsState.favorite) ? (
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
        {checkDiscount !== "0" && checkDiscount !== "" && (
          <div className="prodCardDiscount">
            <DiscountLabel discount={checkDiscount} />
          </div>
        )}
        <div className="prodCardImageLine">
          <img src={pictures[0]} alt={title} className="image" loading="lazy" />
        </div>
        <div className="prodCardDescLine">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="prodCardPriceLine">
            <p>{getPriceOfItem(price, discount)}</p>
            {isDiscount(price, discount) && <p>{isDiscount(price, discount)}</p>}
          </div>
          <ButtonSecondary
            width={202}
            type="button"
            height={48}
            text={isInCollection(_id, cartState.goods) ? "Already in card" : "Add to cart"}
            onClick={onClickAddToCard}
            disabled={isInCollection(_id, cartState.goods)}
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
              className={isInCollection(_id, goodsState.comparison) ? "checked" : ""}
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
              className={isInCollection(_id, goodsState.favorite) ? "checked" : ""}
            >
              {isInCollection(_id, goodsState.favorite) ? (
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
};

export default ProductCard;
