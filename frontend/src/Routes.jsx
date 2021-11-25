import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Trades from "./pages/Trades";
import Items from "./pages/Items";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/trades" component={Trades} />
      <Route exact path="/items" component={Items} />
    </Switch>
  );
};

export default routes;
