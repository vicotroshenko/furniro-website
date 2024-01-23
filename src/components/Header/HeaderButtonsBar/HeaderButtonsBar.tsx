import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./HeaderButtonsBar.css"

const HeaderButtonsBar = () => {
  return (
    <div className="headerButtons">
      <button type="button">
        <TbUserExclamation style={{width: "100%", height: "100%"}}/>
      </button>
      <button type="button">
        <CiSearch style={{width: "100%", height: "100%"}}/>
      </button>
      <button type="button">
        <FaRegHeart style={{width: "100%", height: "100%"}}/>
      </button>
      <button type="button">
        <MdOutlineShoppingCart style={{width: "100%", height: "100%"}}/>
      </button>
    </div>
  );
};

export default HeaderButtonsBar;
