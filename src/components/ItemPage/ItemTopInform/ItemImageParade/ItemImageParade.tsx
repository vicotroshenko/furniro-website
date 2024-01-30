import { nanoid } from "nanoid";
import "./ItemImageParade.css";
import { useEffect, useState } from "react";
import { IItemImageParadeProps } from "../../../../types/types";

const ItemImageParade: React.FC<IItemImageParadeProps> = ({ pictures }) => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    if (images.length === 0) {
      setImages(pictures);
    }
  }, [images.length, pictures]);

  const handleImageClick = (index: number = 0) => {
    console.log(index);
    if (index === 0) {
      return images;
    } else {
      setImages((prev) => {
        const foundEl = prev[index];
        const newImagWithoutIndexEl = prev.filter(
          (_item, indexI) => indexI !== index
        );
        return [foundEl, ...newImagWithoutIndexEl];
      });
    }
  };
  return (
    <ul className="itemImageContainer">
      {images.map((item, index) => (
        <li key={nanoid()} onClick={() => handleImageClick(index)}>
          <img
            src={item}
            alt="describe goods"
            className="image"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemImageParade;
