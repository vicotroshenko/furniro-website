import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { getAllGoods } from "../../../redux/goods/operations";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { IDataSlice } from "../../../types/types";
import "./Products.css";
import ButtonSecondary from "../../ButtonSecondary/ButtonSecondary";
import ProductList from "../../ProductList/ProductList";



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
        <ProductList items={partOfItems}/>
        <div className="productsMoreButtonWrap">
          <ButtonSecondary
            type="button"
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
