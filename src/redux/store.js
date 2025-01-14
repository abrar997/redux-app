import { applyMiddleware, combineReducers, createStore } from "redux";
import { laptopReducer } from "./reducers/laptop-reducer";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/product-reducer";
import { mobileReducer } from "./reducers/mobile-reducer";

const rootReducer = combineReducers({
  mobile: mobileReducer,
  laptop: laptopReducer,
  products: productReducer,
});

// export const store = createStore(rootReducer);
// if we have async [data take time to loading]
export const store = createStore(rootReducer, applyMiddleware(thunk));
