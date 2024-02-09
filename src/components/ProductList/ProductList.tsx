import { nanoid } from "nanoid";
import ProductCard from "../ProductCard/ProductCard";
import { ICart, IDataSlice } from "../../types/types";
import "./ProductList.css";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getPriceOfItem } from "../../helpers/getPriceOfItem";
import { useAppSelector } from "../../hooks/useAppSelector";

interface IproductListProps {
  items: IDataSlice[] | [];
}

const ProductList: React.FC<IproductListProps> = ({ items }) => {
  const location = useLocation();
  const path = location.pathname === "/" ? "/shop/" : "";

  const dispatch = useAppDispatch();
  const { listView } = useAppSelector(state => state.user);
  const grid = listView === "grid"

  const handleAddToCard = (item: ICart) => {
    const date = new Date();
    const newCardItem = {
      ...item,
      buyAmount: 1,
      date: date.getDate(),
      price: getPriceOfItem(item.price, item.discount),
    };
    dispatch(addToCart(newCardItem));
  };

  return (
    <ul className={grid ? "productsList" : "productsListLine"}>
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
              />
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default ProductList;
