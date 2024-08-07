import { Rating } from '@mui/material';
import { memo, useState } from 'react';

import { IDataSlice } from '../../../../types/types';
import './ItemDescribe.css';

export interface IItemDescribe
  extends Pick<IDataSlice, 'title' | 'description' | 'price' | 'reviews'> {
  rating?: number;
}

const ItemDescribe: React.FC<IItemDescribe> = memo(
  ({ title, description, price, reviews = [], rating = 0 }) => {
    const [value, setValue] = useState<number | null>(null);
    return (
      <div className="itemDescribeContainer">
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
            className="itemRatingRow_rating"
          />
          <div className="divider"></div>
          <button
            type="button"
            name="divider"
          >
            {reviews.length} Customer Review
          </button>
        </div>
        <p className="itemDescribeText">{description}</p>
      </div>
    );
  }
);

export default ItemDescribe;
