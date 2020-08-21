import { combineReducers } from "redux";
import products from "./Allreducers";

// export default combineReducers({
//   products,
// });
const rootReducer = combineReducers({
  products,
});

export default rootReducer;
