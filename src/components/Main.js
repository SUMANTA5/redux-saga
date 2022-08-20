
import { addToCart } from "../redux/action";
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
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default Main;
