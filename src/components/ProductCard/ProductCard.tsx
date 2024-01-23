import image3 from "../../images/jpeg/image3.jpg";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import "./ProductCard.css";
import { useState } from "react";
import DiscountLabel from "../DiscountLabel/DiscountLabel";

const ProductCard = () => {
  const [like, setLike] = useState<boolean>(false);

  return (
    <div className="prodCardContainer">
			<div className="prodCardDiscount">
				<DiscountLabel discount={30}/>
			</div>
      <div className="prodCardImage">
        <img src={image3} alt="sofa" className="image" />
      </div>
      <div className="prodCardDesc">
        <h3>Lolito</h3>
        <p>Luxury big sofa</p>
        <div className="prodCardPrice">
          <p>Rp 7.000.000</p>
          <p>Rp 14.000.000</p>
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
