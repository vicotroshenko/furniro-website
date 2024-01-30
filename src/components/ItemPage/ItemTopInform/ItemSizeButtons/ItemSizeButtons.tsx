import { useState } from "react";
import "./ItemSizeButtons.css";
import { nanoid } from "nanoid";

interface IItemsSizeButtons {
	size: string[];
	onSize?: () => string;
}

const ItemSizeButtons:React.FC<IItemsSizeButtons> = ({ size, onSize }) => {
  const [sizeChose, setSizeChose] = useState<string>("");

  const handleTypeOfSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    console.log(e.target.name);
    setSizeChose(name);
  };

  return (
    <div className="is-container">
      <p className="itemSizeTitle">Size</p>
      <div className="itemSizeBtnWrapper">
        {size.map((item) => (
          <div key={nanoid()}>
            <input
              type="radio"
              name={item}
              id={item}
              onChange={handleTypeOfSize}
              className="itemSizeButton"
              checked={sizeChose === item}
            />
            <label key={nanoid()} htmlFor={item} className="itemSizeField">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSizeButtons;
