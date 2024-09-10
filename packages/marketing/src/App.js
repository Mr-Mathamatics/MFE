import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./component/Landing";
import Pricing from "./component/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

function App({ history }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
