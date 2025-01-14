import { ADD_PRODUCT, FETCH_PRODUCTS } from "../actions/constants";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload];
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};
