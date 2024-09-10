import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Loader from "./components/Progress";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  // mount(document.getElementById('MarketingApp'))
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header signedIn={isSignIn} onSignOut={()=>setIsSignIn(false)}/>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignIn(true)} />
            </Route>
            <Route path="/">
              <MarketingApp />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
