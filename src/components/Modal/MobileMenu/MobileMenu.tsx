import { Link, useLocation } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { IMobileModal } from "../../../types/types";
import HeaderLogo from "../../Header/HeaderLogo/HeaderLogo";
import ModalLinks from "../../Header/ModalLinks/ModalLinks";
import HeaderButtonsBar from "../../Header/HeaderButtonsBar/HeaderButtonsBar";
import "./MobileMenu.css";


const MobileMenu: React.FC<IMobileModal> = ({ onClick, itemsAmount, isOpenCartModal, onToggleSearch, onToggleFavorite }) => {
  const { pathname } = useLocation();

  return (
    <div className="mobilMenu-container">
      <div className="mobiuleMenu-top-container">
        <HeaderLogo />
        <button
          type="button"
          aria-label="close mobile menu button"
          className="mobile-button-close"
          onClick={onClick}
        >
          <GrClose style={{ width: "100%", height: "100%" }} />
        </button>
      </div>
      <nav className="mobil-nav">
        <ul className="mobil-navList" onClick={onClick}>
          <li>
            <Link to={"/"} className={pathname === "/" ? "active" : ""}>
              home
            </Link>
          </li>
          <li>
            <Link to={"/shop?view=grid&page=1&limit=9"} className={pathname === "/shop" ? "active" : ""}>
              shop
            </Link>
          </li>
          <li>
            <Link
              to={"/contacts"}
              className={pathname === "/contacts" ? "active" : ""}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
			<HeaderButtonsBar onClick={isOpenCartModal} onToggleSearch={onToggleSearch} onToggleFavorite={onToggleFavorite} itemsAmount={itemsAmount} hidden={false}/>
			<ModalLinks onClick={onClick}/>
    </div>
  );
};

export default MobileMenu;
