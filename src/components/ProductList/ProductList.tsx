import { nanoid } from "nanoid";
import ProductCard from "../ProductCard/ProductCard";
import { ICart, IDataSlice } from "../../types/types";
import "./ProductList.css";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getPriceOfItem } from "../../helpers/getPriceOfItem";
import { useAppSelector } from "../../hooks/useAppSelector";

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

interface IproductListProps {
  items: IDataSlice[] | [];
}

const ProductList: React.FC<IproductListProps> = ({ items }) => {
  const location = useLocation();
  const path = location.pathname === "/" ? "/shop/" : "";

  const dispatch = useAppDispatch();


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
    <ul className="productsList">
      {items.map((item: IDataSlice) => (
        <li key={nanoid()}>
          <Link to={`${path}${item._id}`} style={{ textDecoration: "none" }}>
            <ProductCard
              id={item._id}
              image={item.pictures[0]}
              discount={isNewItem(item.status, item.discount)}
              title={item.title}
              shortInfo="Shor info about..."
              firstPrice={isDiscount(item.price, item.discount)}
              discountPrice={getPriceOfItem(item.price, item.discount)}
              onClickAddToCard={() =>
                handleAddToCard({
                  _id: item._id,
                  pictures: item.pictures,
                  title: item.title,
                  price: item.price,
                  amount: item.amount,
                  discount: item.discount,
                })
              }
              item={item}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
