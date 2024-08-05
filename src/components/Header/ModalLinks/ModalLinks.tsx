import { NavLink } from 'react-router-dom';

import { RoutKey } from '../../../constants';
import './ModalLinks.css';

interface ModalLinksProps {
  onClick: () => void;
}

const ModalLinks: React.FC<ModalLinksProps> = ({ onClick }) => {
  return (
    <div className="mc-c-bottomLinksWrapper">
      <div
        className="mc-c-bottomLinks mc-c-flex"
        onClick={onClick}
      >
        <NavLink to={RoutKey.CART}>Cart</NavLink>
        <NavLink to={RoutKey.CHECKOUT}>Checkout</NavLink>
        <NavLink to={RoutKey.COMPARISON}>Comparison</NavLink>
      </div>
    </div>
  );
};

export default ModalLinks;
