import { NavLink } from 'react-router-dom';

import { IModalCartContainProps } from '../../../types/types';
import './ModalLinks.css';

const ModalLinks: React.FC<IModalCartContainProps> = ({ onClick }) => {
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
