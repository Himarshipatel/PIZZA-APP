import React from "react";
import Navbarr from "./components/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/RootReducers";
//import { PersistGate } from "redux-persist/es/integration/react";
//import { store, persistor } from "./store";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <div>
        <Navbarr />
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
