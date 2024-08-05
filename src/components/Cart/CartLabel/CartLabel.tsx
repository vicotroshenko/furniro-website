import { nanoid } from 'nanoid';

import './CartLabel.css';

const labels = ['Product', 'Price', 'Quantity', 'Subtotal'];
const CartLabel = () => {
  return (
    <ul className="cl-list">
      {labels.map((label) => (
        <li key={nanoid()}>{label}</li>
      ))}
    </ul>
  );
};

export default CartLabel;
