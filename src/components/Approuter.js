import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Vieworder from "./ViewOrder.js";
import Myorder from "./MyOrder.js";
import CartList from "./CartList.js";
import ItemList from "./ItemList.js";
const Approuter = () => {
  const auth = localStorage.getItem("auth");
  console.log("auth");
  return (
    <div>
      {auth ? (
        <div>
          <Switch>
            <Route path="/success" component={Vieworder} />

            <Route path="/order" component={Myorder} />

            <Route path="/cart" component={CartList} />

            <Route path="/" component={ItemList} />
          </Switch>
        </div>
      ) : (
        <div>
          <Redirect to="/"></Redirect>
        </div>
      )}
    </div>
  );
};

export default Approuter;
