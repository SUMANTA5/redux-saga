import { createStore } from "redux";

const dammyReducer = () => {
  return 100;
};

const store = createStore(dammyReducer);

export default store;
