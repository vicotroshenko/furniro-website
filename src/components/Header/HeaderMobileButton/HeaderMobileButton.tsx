import { GiHamburgerMenu } from "react-icons/gi";
import { IHeaderMobileButtonProps } from "../../../types/types";
import "./HeaderMobileButton.css";

const HeaderMobileButton: React.FC<IHeaderMobileButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      className="burger-menu-button headerIconButtons"
      aria-label="mobil menu button"
			onClick={onClick}
    >
      <GiHamburgerMenu style={{ width: 28, height: 28 }} />
    </button>
  );
};

export default HeaderMobileButton;
