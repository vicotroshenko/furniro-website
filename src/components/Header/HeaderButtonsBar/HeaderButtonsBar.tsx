import { Badge, Tooltip } from '@mui/material';
import classNames from 'classnames';
import { CiSearch } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { TbUserExclamation } from 'react-icons/tb';

import { useAppSelector } from '../../../hooks/useAppSelector';
import './HeaderButtonsBar.css';

interface IHeaderMobileButtonProps {
  itemsAmount?: number;
  hidden?: boolean;
  onToggleSearch?: () => void;
  onToggleFavorite?: () => void;
  onClick: () => void;
}

const HeaderButtonsBar: React.FC<IHeaderMobileButtonProps> = ({
  onClick,
  onToggleSearch,
  onToggleFavorite,
  itemsAmount,
  hidden,
}) => {
  const favorite = useAppSelector((state) => state.goods.favorite);
  return (
    <>
      <div className={classNames('headerButtons', { hidden: hidden })}>
        <Tooltip
          title="Login"
          placement="bottom"
          arrow
          enterDelay={500}
          leaveDelay={200}
        >
          <button
            type="button"
            className="headerIconButtons"
            aria-label="user login button"
          >
            <TbUserExclamation className="headerButtons_icon-size" />
          </button>
        </Tooltip>
        <Tooltip
          title="Search"
          placement="bottom"
          arrow
          enterDelay={500}
          leaveDelay={200}
        >
          <button
            type="button"
            onClick={onToggleSearch}
            className="headerIconButtons"
            aria-label="search button"
          >
            <CiSearch className="headerButtons_icon-size" />
          </button>
        </Tooltip>
        <Tooltip
          title="Favorite"
          placement="bottom"
          arrow
          enterDelay={500}
        >
          <button
            type="button"
            className="headerIconButtons"
            aria-label="favorite items button"
            onClick={onToggleFavorite}
          >
            <Badge
              badgeContent={favorite.length}
              color="primary"
              sx={{ width: '100%', height: '100%' }}
            >
              <FaRegHeart className="headerButtons_icon-size" />
            </Badge>
          </button>
        </Tooltip>
        <Tooltip
          title="Cart"
          placement="bottom"
          arrow
          enterDelay={500}
        >
          <button
            type="button"
            onClick={onClick}
            name="cart-icon"
            className="headerIconButtons"
            aria-label="look at cart button"
          >
            <Badge
              badgeContent={itemsAmount}
              color="primary"
              sx={{ width: '100%', height: '100%' }}
            >
              <MdOutlineShoppingCart className="headerButtons_icon-size" />
            </Badge>
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default HeaderButtonsBar;
