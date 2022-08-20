import { ADD_TO_CART } from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducx call", action);
      return [action.data, ...data]

    default:
      return data;
  }
};
