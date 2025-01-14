import { ADD_PRODUCT, FETCH_PRODUCTS } from "./constants";

export const getProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};

export const fetchAllProducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    dispatch(getProducts(data));
  };
};

export const AddProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
