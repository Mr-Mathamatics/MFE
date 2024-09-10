import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

function AuthApp({ onSignIn }) {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParantNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: naxtPathname }) => {
        const pathname = history.location.pathname;
        if (pathname !== naxtPathname) {
          history.push(naxtPathname);
        }
      },
      onSignIn
    });

    history.listen(onParantNavigate);
  }, []);

  return <div ref={ref} />;
}

export default AuthApp;
