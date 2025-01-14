import { BUY_LAPTOP } from "../actions/constants";

export const laptopReducer = (state = 50, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return state - action.payload;
    default:
      return state;
  }
};
