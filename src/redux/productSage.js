import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST,SEARCH_PRODUCT } from "./constant";

function* getProduct() {
  let data = yield fetch("http://localhost:5000/product");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProduct(data) {
  let result = yield fetch(`http://localhost:5000/product?q=${data.query}`);
  console.log("searchProduct",data)
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data:result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
  yield takeEvery(SEARCH_PRODUCT, searchProduct);
}
export default productSaga;
