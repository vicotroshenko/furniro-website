import CartLabel from "../CartLabel/CartLabel";
import CartPageItem from "../CartPageItem/CartPageItem";
import { ICart } from "../../../types/types";
import { nanoid } from "nanoid";
import CartTotals from "../CartTotals/CartTotals";
import "./CartList.css";
import { useCartContext } from "../../../hooks/useCartContext";


const CartList = () => {
  const { cartState, setCartState } = useCartContext();
  const cart = cartState.goods;


  const handleDeleteItem = (id: string) => {
    const goods = cart.filter(item => item._id !== id);
    setCartState({goods});
  };

  const getTotalPrice = (buyAmount: number, price: string) => {
    if (buyAmount === 1) {
      return price;
    } else {
      return (buyAmount * +price).toFixed(2).toString();
    }
  };
  return (
    <section className="cartListSection">
      <div className="cartListContainer mc-c-flex">
        <div>
          <CartLabel />
          <div className="cartList">
            {cart.map(
              ({ title, price, pictures, buyAmount = 0, _id }: ICart) => (
                <CartPageItem
                  id={_id}
                  picture={pictures[0]}
                  title={title}
                  buyAmount={+buyAmount}
                  totalPrice={getTotalPrice(buyAmount, price)}
                  price={price}
                  onClick={() => handleDeleteItem(_id)}
                  key={nanoid()}
                />
              )
            )}
          </div>
        </div>
				<CartTotals goods={cart}/>
      </div>
    </section>
  );
};

export default CartList;
