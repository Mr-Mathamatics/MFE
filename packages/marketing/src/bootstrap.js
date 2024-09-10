import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defultHistory }) => {
  const history = defultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParantNavigate: ({ pathname: nextPathname }) => {
      const pathname = history.location.pathname;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("marketing-root");
  if (root) {
    mount(root, { defultHistory: createBrowserHistory() });
  }
}

export { mount };
