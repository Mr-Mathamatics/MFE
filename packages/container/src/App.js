import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import Loader from "./components/Progress";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

const history = createBrowserHistory();

function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    if (isSignIn) {
      history.push("/dashboard");
    }
  }, [isSignIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header signedIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <MarketingApp />
            </Route>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignIn(true)} />
            </Route>
            <Route exact path="/dashboard">
              {!isSignIn && <Redirect to={""} />}
              <DashboardApp />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
}

export default App;
