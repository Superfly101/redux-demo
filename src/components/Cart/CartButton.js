import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
