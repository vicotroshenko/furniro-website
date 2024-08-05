import { NavLink } from 'react-router-dom';

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
        <NavLink to={'/cart'}>Cart</NavLink>
        <NavLink to={'/checkout'}>Checkout</NavLink>
        <NavLink to={'/comparison'}>Comparison</NavLink>
      </div>
    </div>
  );
};

export default ModalLinks;
