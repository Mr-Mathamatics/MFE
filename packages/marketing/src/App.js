import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./component/Landing";
import Pricing from "./component/Pricing";

function App() {
  return (
    <StylesProvider>
      <Router>
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
