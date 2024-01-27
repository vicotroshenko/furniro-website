import image3 from "../../images/jpeg/image3.jpg";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import "./ProductCard.css";
import { useState } from "react";
import DiscountLabel from "../DiscountLabel/DiscountLabel";

interface IProductCardProps {
  image: string;
  discount: string | number;
  title: string;
  shortInfo: string;
  firstPrice: string;
  discountPrice: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  image,
  discount,
  title,
  shortInfo,
  firstPrice,
  discountPrice
}) => {
  const [like, setLike] = useState<boolean>(false);

  return (
    <div className="prodCardContainer">
			{discount !== "0" && discount !== "" && discount !== 0 && <div className="prodCardDiscount">
				<DiscountLabel discount={discount}/>
			</div>}
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
        <ButtonSecondary width={202} height={48} text={"Add to cart"} />
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
