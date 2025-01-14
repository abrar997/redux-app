import { FETCH_PRODUCTS } from "./constants";

export const fetchAllProducts = () => {
  return async (dispatch, getState) => {
    // type: FETCH_PRODUCTS,
    // payload: amount,
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
  };
};
