import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import "./ProductCard.css";
import DiscountLabel from "../DiscountLabel/DiscountLabel";
import { IDataSlice, IProductCardProps } from "../../types/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  addToComparison,
  addToFavorite,
  deletFromComparison,
  deletFromFavotite,
} from "../../redux/goods/goodsSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { isInCollection } from "../../helpers/isInCollection";

const ProductCard: React.FC<IProductCardProps> = ({
  id,
  image,
  discount,
  title,
  shortInfo,
  firstPrice,
  discountPrice,
  onClickAddToCard,
  item,
}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.goods);
  const { favorite, comparison } = useAppSelector((state) => state.goods);

  const isCompare = (item: IDataSlice) => {
    if (isInCollection(item._id, comparison)) {
      dispatch(deletFromComparison({ id: item._id }));
      return;
    }
    dispatch(addToComparison(item));
  };

  const isFavorite = (item: IDataSlice) => {
    if (isInCollection(item._id, favorite)) {
      dispatch(deletFromFavotite({ id: item._id }));
      return;
    }
    dispatch(addToFavorite(item));
  };

  return (
    <div className="prodCardContainer">
      {discount !== "0" && discount !== "" && discount !== 0 && (
        <div className="prodCardDiscount">
          <DiscountLabel discount={discount} />
        </div>
      )}
      <div className="prodCardImage">
        <img src={image} alt={title} className="image" />
      </div>
      <div className="prodCardDesc">
        <h3>{title}</h3>
        <p>{shortInfo}</p>
        <div className="prodCardPrice">
          <p>{discountPrice}</p>
          <p>{firstPrice}</p>
        </div>
      </div>
      <div className="prodCardHoverItem">
        <ButtonSecondary
          width={202}
          type="button"
          height={48}
          text={isInCollection(id, cart) ? "Already in card" : "Add to cart"}
          onClick={onClickAddToCard}
          disabled={isInCollection(id, cart)}
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
            className={isInCollection(id, comparison) ? "checked" : ""}
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
            className={isInCollection(id, favorite) ? "checked" : ""}
          >
            {isInCollection(id, favorite) ? (
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
};

export default ProductCard;
