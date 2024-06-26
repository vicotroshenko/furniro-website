import { useState } from "react";
import { Rating } from "@mui/material";
import { IItemDescribe } from "../../../../types/types";
import "./ItemDescribe.css";

const ItemDescribe: React.FC<IItemDescribe> = ({ rating = 0, title, description, price, reviews=[] }) => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <div className="itemDescribeContaner">
      <h1>{title}</h1>
      <p className="itemDescSubtitle">${price}</p>
      <div className="itemRatingRow">
        <Rating
          name="simple-controlled"
          value={value || rating}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={{ margin: "0 18px 0 0" }}
        />
        <div className="divider"></div>
        <button type="button" name="divider">{reviews.length} Customer Review</button>
      </div>
      <p className="itemDescribeText">
        {description}
      </p>
    </div>
  );
};

export default ItemDescribe;
