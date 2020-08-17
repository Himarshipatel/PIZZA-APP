import React from "react";
import Navbarr from "./components/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/RootReducers";
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbarr />
      </div>
    </Provider>
  );
}

export default App;
