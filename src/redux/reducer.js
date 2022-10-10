import { ADD_TO_CART, REMOVE_FROM_CART, Empty_Cart } from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainingIteme = data.filter((item) => item.id !== action.data);
      console.log("remainingIteme",remainingIteme)
      return [...remainingIteme];

    case Empty_Cart:
      console.log("Empty_Cart", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
