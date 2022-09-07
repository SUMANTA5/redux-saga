import { ADD_TO_CART, REMOVE_FROM_CART, Empty_Cart } from "./constant";
export const addToCart = (data) => {
  console.log("action call", data);

  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  console.log("action call", data);

  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};
export const emptyCart = () => {
  console.log("action call");

  return {
    type: Empty_Cart,
  };
};
