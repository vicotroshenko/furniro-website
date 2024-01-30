import { nanoid } from "nanoid";
import { useAppSelector } from "../../../hooks/useAppSelector";
import "./ItemBottomInform.css";
import { useState } from "react";
import { IGoodData, IItemInnerProps, IReview } from '../../../types/types';


const ItemBottomInform: React.FC<IItemInnerProps> = ({ item }) => {
  const [infoType, setInfoType] = useState<string>("description");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInfoType(event.target.value)
	};

  return (
    <section className="ib-infor">
      <div className="ib-inform-container">
        <div className="ib-inform-btnTitles">
          <input
            type="radio"
            id="desc"
            value="description"
            name="item-info"
						className="ib-radio-field"
						checked={infoType === "description"}
            onChange={handleInputChange}
          />
          <label htmlFor="desc">description</label>

          <input
            type="radio"
            id="add-info"
            value="add-info"
            name="item-info"
						className="ib-radio-field"
						checked={infoType === "add-info"}
            onChange={handleInputChange}
          />
          <label htmlFor="add-info">Additional Information</label>

          <input
            type="radio"
            id="reviews"
            value="reviews"
            name="item-info"
						className="ib-radio-field"
						checked={infoType === "reviews"}
            onChange={handleInputChange}
          />
          <label htmlFor="reviews">Reviews {[item.reviews.length]}</label>
        </div>
				<div className="ib-contain-container">
					{infoType === "description" && <div>
						<p className="ib-text-desc">{item.description}</p>
					</div>}

					{infoType === "add-info" && <div className="ib-add-info-container">
					<ul className="ib-add-info-list">
						<li className="ib-add-info-title">general</li>
						{item.general.map((el:IGoodData) => <li key={nanoid()}>
							<p>{el.title}</p>
							<p>:</p>
							<p>{el.value}</p>
						</li>)}
						</ul>
						<ul className="ib-add-info-list">
						<li className="ib-add-info-title">Product</li>
						{item.product.map((el:IGoodData) => <li key={nanoid()}>
							<p>{el.title}</p>
							<p>:</p>
							<p>{el.value}</p>
						</li>)}
						</ul>
						<ul className="ib-add-info-list">
						<li className="ib-add-info-title">dimensions</li>
						{item.dimensions.map((el:IGoodData) => <li key={nanoid()}>
							<p>{el.title}</p>
							<p>:</p>
							<p>{el.value}</p>
						</li>)}
						</ul>
						</div>}

					{infoType === "reviews" && <ul className="ib-review-list">
						{item.reviews.map((el:IReview) => <li className="ib-review-item">
							<div>
								<p>{el.name}</p>
								<p>{el.date}</p>
							</div>
							<p>{el.review}</p>
						</li>)}
						</ul>}
				</div>
      </div>
    </section>
  );
};

export default ItemBottomInform;
