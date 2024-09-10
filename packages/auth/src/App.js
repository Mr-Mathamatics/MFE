import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignUp from "./component/Signup";
import SignIn from "./component/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

function App({ history, onSignIn }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signup">
            <SignUp onSignIn={onSignIn} />
          </Route>
          <Route exact path="/auth/signin">
            <SignIn onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
