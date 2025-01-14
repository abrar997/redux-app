import { BUY_LAPTOP } from "./constants";

export const buyLaptop = (amount) => {
  return {
    type: BUY_LAPTOP,
    payload: amount,
  };
};
