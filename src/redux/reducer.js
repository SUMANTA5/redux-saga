import { ADD_TO_CART } from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducx call", action);
      return 1 + 1;

    default:
      return "no action matched";
  }
};
