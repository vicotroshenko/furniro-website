import { nanoid } from "nanoid";
import ProductCard from "../ProductCard/ProductCard";
import { ICart, IDataSlice } from "../../types/types";
import "./ProductList.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getPriceOfItem } from "../../helpers/getPriceOfItem";
import { useMemo } from "react";

interface IproductListProps {
  items: IDataSlice[] | [];
}

const ProductList: React.FC<IproductListProps> = ({ items }) => {
  const location = useLocation();
  const path = location.pathname === "/" ? "/shop/" : "";
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const { view } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const handleAddToCard = (item: ICart) => {
    const date = new Date();
    const newCardItem = {
      ...item,
      buyAmount: 1,
      date: date.toString(),
      price: getPriceOfItem(item.price, item.discount),
    };
    dispatch(addToCart(newCardItem));
  };

  return (
    <ul className={(view === "grid" || !view) ? "productsList" : "productsListLine"}>
      {items.map(
        (
          { _id, pictures, title, price, amount, discount }: IDataSlice,
          index,
          array
        ) => (
          <li key={nanoid()}>
            <Link to={`${path}${_id}`} style={{ textDecoration: "none" }}>
              <ProductCard
                onClickAddToCard={() =>
                  handleAddToCard({
                    _id,
                    pictures,
                    title,
                    price,
                    amount,
                    discount,
                  })
                }
                item={array[index]}
                view={view}
              />
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default ProductList;
