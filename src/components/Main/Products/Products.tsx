import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { getAllGoods } from "../../../redux/goods/operations";
import { useAppSelector } from "../../../hooks/useAppSelector";
import ButtonSecondary from "../../ButtonSecondary/ButtonSecondary";
import ProductList from "../../ProductList/ProductList";
import "./Products.css";

const Products = () => {
  const [showCount, setShowCount] = useState<number>(8);
  const step = 8;
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.goods.allGoods);

  useEffect(() => {
    if(items.length === 0){
      dispatch(getAllGoods({}));
    }
  }, [dispatch, items.length]);

  const handleClick = () => {
    if (showCount > items.length) {
      return;
    }
    setShowCount((prev) => prev + step);
  };


  return (
    <section className="productsSection">
      <div className="productsContainer">
        <h2>our products</h2>
        <ProductList items={items}/>
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
