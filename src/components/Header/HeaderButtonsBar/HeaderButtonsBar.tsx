import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "@mui/material";
import { IHeaderMobileButtonProps } from "../../../types/types";
import "./HeaderButtonsBar.css";

const HeaderButtonsBar:React.FC<IHeaderMobileButtonProps> = ({ onClick, itemsAmount, hidden}) => {
  return (
    <>
      <div className={hidden ? "headerButtons hidden" : "headerButtons"}>
        <button type="button" className="headerIconButtons" aria-label="user login button">
          <TbUserExclamation style={{ width: "100%", height: "100%" }} />
        </button>
        <button type="button" className="headerIconButtons" aria-label="search button">
          <CiSearch style={{ width: "100%", height: "100%" }} />
        </button>
        <button type="button" className="headerIconButtons" aria-label="favorite items button">
          <FaRegHeart style={{ width: "100%", height: "100%" }} />
        </button>
        <button type="button" onClick={onClick} name="cart-icon" className="headerIconButtons" aria-label="look at cart button">
        <Badge badgeContent={itemsAmount} color="primary" sx={{width: "100%", heigth: "100%"}}>
          <MdOutlineShoppingCart style={{ width: "100%", height: "100%" }} />
        </Badge>
        </button>
      </div>
    </>
  );
};

export default HeaderButtonsBar;
