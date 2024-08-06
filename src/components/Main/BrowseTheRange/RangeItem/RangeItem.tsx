import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import './RangeItem.css';

interface IRangeItemProps {
  image: any;
  text: string;
  link: string;
}

const RangeItem: React.FC<IRangeItemProps> = memo(({ image, text, link }) => {
  return (
    <li className="rangeItem">
      <NavLink to={link}>
        <div
          className="rangeItemImage"
          style={{ background: `center/cover no-repeat url(${image})` }}
        ></div>
      </NavLink>
      <NavLink to={link}>
        <p className="rangeItemText">{text}</p>
      </NavLink>
    </li>
  );
});

export default RangeItem;
