import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import MarketingApp from "./components/MarketingApp";
function App() {
  // mount(document.getElementById('MarketingApp'))
  return (
    <StylesProvider>
      <MarketingApp/>
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
        </Switch>
      </Router> */}
    </StylesProvider>
  );
}

export default App;
