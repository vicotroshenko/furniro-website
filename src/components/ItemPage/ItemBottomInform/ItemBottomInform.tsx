import { nanoid } from 'nanoid';
import { memo, useState } from 'react';

import { IDataSlice, IGoodData, IReview } from '../../../types/types';
import ItemReviewField from '../ItemReviewField/ItemReviewField';
import './ItemBottomInform.css';

enum AccordionName {
  DESCRIPTION = 'description',
  ADD_INFO = 'add_info',
  REVIEWS = 'reviews',
}

interface IItemInnerProps {
  item: IDataSlice;
}

const ItemBottomInform: React.FC<IItemInnerProps> = memo(({ item }) => {
  const [infoType, setInfoType] = useState<string>('description');
  const [reviewAction, setReviewAction] = useState<string>('read');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfoType(event.target.value);
  };

  const handleReviewAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setReviewAction(name);
  };

  return (
    <section className="ib-infor">
      <div className="ib-inform-container">
        <div className="ib-inform-btnTitles">
          <input
            type="radio"
            id={AccordionName.DESCRIPTION}
            value={AccordionName.DESCRIPTION}
            name="item-info"
            className="ib-radio-field"
            checked={infoType === AccordionName.DESCRIPTION}
            onChange={handleInputChange}
          />
          <label htmlFor={AccordionName.DESCRIPTION}>
            {AccordionName.DESCRIPTION}
          </label>

          <input
            type="radio"
            id={AccordionName.ADD_INFO}
            value={AccordionName.ADD_INFO}
            name="item-info"
            className="ib-radio-field"
            checked={infoType === AccordionName.ADD_INFO}
            onChange={handleInputChange}
          />
          <label htmlFor={AccordionName.ADD_INFO}>Additional Information</label>

          <input
            type="radio"
            id={AccordionName.REVIEWS}
            value={AccordionName.REVIEWS}
            name="item-info"
            className="ib-radio-field"
            checked={infoType === AccordionName.REVIEWS}
            onChange={handleInputChange}
          />
          <label htmlFor={AccordionName.REVIEWS}>
            Reviews {[item.reviews?.length || 0]}
          </label>
        </div>
        <div className="ib-contain-container">
          {infoType === AccordionName.DESCRIPTION && (
            <div>
              <p className="ib-text-desc">{item.description}</p>
            </div>
          )}

          {infoType === AccordionName.ADD_INFO && (
            <div className="ib-add-info-container">
              <ul className="ib-add-info-list">
                <li className="ib-add-info-title">general</li>
                {item.general?.map((el: IGoodData) => (
                  <li key={nanoid()}>
                    <p>{el.title}</p>
                    <p>:</p>
                    <p>{el.value}</p>
                  </li>
                ))}
              </ul>
              <ul className="ib-add-info-list">
                <li className="ib-add-info-title">Product</li>
                {item.product?.map((el: IGoodData) => (
                  <li key={nanoid()}>
                    <p>{el.title}</p>
                    <p>:</p>
                    <p>{el.value}</p>
                  </li>
                ))}
              </ul>
              <ul className="ib-add-info-list">
                <li className="ib-add-info-title">dimensions</li>
                {item.dimensions?.map((el: IGoodData) => (
                  <li key={nanoid()}>
                    <p>{el.title}</p>
                    <p>:</p>
                    <p>{el.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {infoType === AccordionName.REVIEWS && (
            <ul className="ib-review-list">
              <li className="ib-createdRewieBtns">
                <input
                  type="radio"
                  name="read"
                  id="ib-read"
                  onChange={handleReviewAction}
                  checked={reviewAction === 'read'}
                />
                <label htmlFor="ib-read">All reviews</label>
                <input
                  type="radio"
                  name="create"
                  id="ib-create"
                  onChange={handleReviewAction}
                  checked={reviewAction === 'create'}
                />
                <label htmlFor="ib-create">Add review</label>
              </li>
              {reviewAction === 'read' &&
                item.reviews?.map((el: IReview) => (
                  <li
                    className="ib-review-item"
                    key={nanoid()}
                  >
                    <div>
                      <p>{el.name}</p>
                      <p>{el.date}</p>
                    </div>
                    <p>{el.review}</p>
                  </li>
                ))}
            </ul>
          )}
          {reviewAction === 'create' && infoType === 'reviews' && (
            <div>
              <ItemReviewField id={item._id} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default ItemBottomInform;
