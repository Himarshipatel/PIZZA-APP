import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../redux/reducers/RootReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};
const middleware = applyMiddleware(thunk, logger);
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
