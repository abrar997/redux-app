import { BUY_MOBILE, REFUND_MOBILE } from "../actions/constants";

export const mobileReducer = (state = 100, action) => {
  switch (action.type) {
    case BUY_MOBILE:
      return state - action.payload;
    case REFUND_MOBILE:
      return state + action.payload;
    default:
      return state;
  }
};
