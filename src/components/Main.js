import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData);

  console.log("data in main comp.....", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div className="product-card">
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className="product-class">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.img} alt="" />
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div>Brand: {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add To cart
              </button>
            </div>
            <div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
