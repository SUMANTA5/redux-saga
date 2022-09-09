import { PRODUCT_LIST} from "./constant";
export const productList = () => {
    let data ="hello"
  console.log("action call", data);

  return {
    type: PRODUCT_LIST,
    data: data,
  };
};