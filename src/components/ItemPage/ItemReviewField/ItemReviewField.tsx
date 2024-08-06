import { memo, useCallback } from 'react';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addReview } from '../../../redux/goods/operations';
import './ItemReviewField.css';

enum ReviewName {
  AUTHOR = 'author',
  REVIEW = 'review',
}

interface ItemReviewFieldProps {
  id: string;
}

const ItemReviewField: React.FC<ItemReviewFieldProps> = memo(({ id }) => {
  const dispatch = useAppDispatch();

  const handleReviewSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const name = e.currentTarget[0] as HTMLInputElement;
      const review = e.currentTarget[2] as HTMLInputElement;
      const date = new Date();

      dispatch(
        addReview({
          id,
          data: {
            author: 'unregister user',
            name: name.value,
            review: review.value,
            date: date.toLocaleDateString(),
          },
        })
      );
    },
    [id, dispatch]
  );

  return (
    <form
      onSubmit={handleReviewSubmit}
      className="itemReviewForm"
    >
      <div className="revieAutorContainer">
        <label className="itemReviewLabel">
          Author
          <input
            type="text"
            name={ReviewName.AUTHOR}
            className="itemReviewField"
            required
          />
        </label>
        <button
          type="submit"
          className="itemReviewButton"
        >
          Sent
        </button>
      </div>

      <label className="itemReviewLabelArea">
        Review
        <textarea
          name={ReviewName.REVIEW}
          className="itemReviewFieldArea"
          wrap="soft"
          required
        ></textarea>
      </label>
    </form>
  );
});

export default ItemReviewField;
