import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import "./ProductCard.css";
import { useState } from "react";
import DiscountLabel from "../DiscountLabel/DiscountLabel";
import { ICart, IProductCardProps } from "../../types/types";
import { useAppSelector } from "../../hooks/useAppSelector";

const ProductCard: React.FC<IProductCardProps> = ({
  id,
  image,
  discount,
  title,
  shortInfo,
  firstPrice,
  discountPrice,
  onClickAddToCard,
}) => {
  const [like, setLike] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart.goods);

  const checkItem = (items: ICart[]) => {
    const disabled = items.find((item) => item._id === id);
    if(disabled){
      return true;
    } else {
      return false;
    }
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
          text={checkItem(cart) ? "Already in card" : "Add to cart"}
          onClick={onClickAddToCard}
          disabled={checkItem(cart)}
        />
        <div className="prodCardBtns">
          <button type="button">
            <IoMdShare className="prodCardIconBtn" />
            Share
          </button>
          <button type="button">
            <MdOutlineCompareArrows className="prodCardIconBtn" />
            Compare
          </button>
          <button type="button" onClick={() => setLike(!like)}>
            {like ? (
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
