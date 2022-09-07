import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();

  const product = {
    itemName: "i phone",
    type: "Mobile",
    price: "100000",
    color: "red",
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.itemName))}>
          Remove from Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
    </div>
  );
}

export default Main;