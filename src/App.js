import React from "react";
import Navbarr from "./components/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./store/Configure";

//const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>
          <Navbarr />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
