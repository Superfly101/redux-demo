import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let cartContent = (
    <ul>
      {cartItems.map((item) => (
        <CartItem item={item} />
      ))}
    </ul>
  );
  if (cartItems.length <= 0) {
    cartContent = <p>Cart is empty!</p>;
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartContent}
    </Card>
  );
};

export default Cart;
