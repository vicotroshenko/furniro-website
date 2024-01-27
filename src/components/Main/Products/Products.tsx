import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { getAllGoods } from "../../../redux/operations";
import { useAppSelector } from "../../../hooks/useAppSelector";
import ProductCard from "../../ProductCard/ProductCard";
import { nanoid } from "nanoid";
import { IDataSlice } from "../../../types/types";
import "./Products.css";
import ButtonSecondary from "../../ButtonSecondary/ButtonSecondary";

const getPriceOfItem = (price: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return price;
  }
  return Math.floor(+price - +price * (+discount / 100)).toString();
};

const isDiscount = (price: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return "";
  }
  return price;
};

const isNewItem = (status: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return status;
  }
  return discount;
};

const getPartOfItems = (
  items: IDataSlice[] | [],
  count: number
): IDataSlice[] | [] => {
  if (items.length <= count) {
    return items;
  }
  return items.slice(0, count);
};

const Products = () => {
  const [showCount, setShowCount] = useState<number>(8);
  const step = 8;
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.goods.allGoods);

  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  const handleClick = () => {
    if (showCount > items.length) {
      return;
    }
    setShowCount((prev) => prev + step);
  };

  const partOfItems = useMemo(
    () => getPartOfItems(items, showCount),
    [items, showCount]
  );

  return (
    <section className="productsSection">
      <div className="productsContainer">
        <h2>our products</h2>
        <ul className="productsList">
          {partOfItems.map(
            ({ title, price, pictures, status, discount }: IDataSlice) => (
              <li className="productsItem" key={nanoid()}>
                <ProductCard
                  image={pictures[0]}
                  discount={isNewItem(status, discount)}
                  title={title}
                  shortInfo="Shor info about..."
                  firstPrice={isDiscount(price, discount)}
                  discountPrice={getPriceOfItem(price, discount)}
                />
              </li>
            )
          )}
        </ul>
        <div className="productsMoreButtonWrap">
          <ButtonSecondary
            width={245}
            height={48}
            text="Show more"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
