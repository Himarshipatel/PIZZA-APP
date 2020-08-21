import React from "react";
import { Switch, Route } from "react-router-dom";
import Vieworder from "./ViewOrder.js";
import Myorder from "./MyOrder.js";
import CartList from "./CartList.js";
import ItemList from "./ItemList.js";

const Approuter = () => {
  return (
    <div>
      <Switch>
        <Route path="/success" component={Vieworder} />

        <Route path="/order" component={Myorder} />

        <Route path="/cart" component={CartList} />

        <Route path="/" component={ItemList} />
      </Switch>
    </div>
  );
};

export default Approuter;
