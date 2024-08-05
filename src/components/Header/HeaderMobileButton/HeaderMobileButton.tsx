import { GiHamburgerMenu } from 'react-icons/gi';

import './HeaderMobileButton.css';

interface IHeaderMobileButtonProps {
  onClick: () => void;
}

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
      <GiHamburgerMenu className="burger-menu-button_icon" />
    </button>
  );
};

export default HeaderMobileButton;
