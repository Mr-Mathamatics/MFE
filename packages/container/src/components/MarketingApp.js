import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";
function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParantNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: naxtPathname }) => {
        const pathname = history.location.pathname;
        if (pathname !== naxtPathname) {
          history.push(naxtPathname);
        }
      },
    });

    history.listen(onParantNavigate)
  }, []);

  return <div ref={ref} />;
}

export default MarketingApp;
