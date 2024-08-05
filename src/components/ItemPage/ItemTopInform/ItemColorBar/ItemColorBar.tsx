import { nanoid } from 'nanoid';
import { useState } from 'react';

import './ItemColorBar.css';

interface IItemColorBar {
  colors: string[];
}

const ItemColorBar: React.FC<IItemColorBar> = ({ colors = [] }) => {
  const [colorItem, setColorItem] = useState<string>('');

  return (
    <div className="ic-container">
      <p className="itemColorTitle">Color</p>
      <div className="itemColorBtnWrapper">
        {colors.map((item) => (
          <div
            key={nanoid()}
            className="itemColorBtn"
          >
            <input
              type="radio"
              id={item}
              name={item}
              checked={item === colorItem}
              className="itemColorField"
              onChange={() => setColorItem(item)}
            />
            <label
              htmlFor={item}
              className="itemColorLabel"
              style={{ backgroundColor: item }}
            ></label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemColorBar;
