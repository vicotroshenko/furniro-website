import { useEffect, useState } from "react";
import ButtonSecondary from "../../ButtonSecondary/ButtonSecondary";
import ProductList from "../../ProductList/ProductList";
import "./Products.css";
import { useGoodsContext } from "../../../hooks/useGoodsContext";
import { getAllGoods } from "../../../api/goods";

const Products = () => {
  const [showCount, setShowCount] = useState<string>("9");
  const step = 6;
  const { goodsState, setGoodsState } = useGoodsContext();

  useEffect(() => {
    (async () => {
      setGoodsState((prev) => ({ ...prev, status: "loading" }));

      const response = await getAllGoods({ page: "1", limit: showCount });
      if (!response) {
        setGoodsState((prev) => ({ ...prev, status: "error" }));
        return;
      }

      setGoodsState((prev) => ({
        ...prev,
        allGoods: response.result,
        stats: response.summary,
        status: "success",
      }));
    })();
  }, [setGoodsState, showCount]);

  const handleClick = () => {
    if (+showCount > goodsState.allGoods.length) {
      return;
    }
    setShowCount((prev) => prev + step);
  };

  return (
    <section className="productsSection">
      <div className="productsContainer">
        <h2>our products</h2>
        <ProductList items={goodsState.allGoods} />
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
