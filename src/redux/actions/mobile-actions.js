import { BUY_MOBILE, REFUND_MOBILE } from "./constants";

export const buyMobile = (amount) => {
  return {
    type: BUY_MOBILE,
    payload: amount,
  };
};

export const refundMobile = (amount) => {
  return {
    type: REFUND_MOBILE,
    payload: amount,
  };
};
