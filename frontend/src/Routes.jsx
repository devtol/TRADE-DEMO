import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Trades from "./pages/Trades";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/trades" component={Trades} />
    </Switch>
  );
};

export default routes;
