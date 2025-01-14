import { BUY_LAPTOP } from "../actions/constants";

export const laptopReducer = (state = 50, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return state - 1;
    default:
      return state;
  }
};
