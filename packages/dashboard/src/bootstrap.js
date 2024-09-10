import { createApp } from "vue";
import Dashboard from "./components/dashboard";

const mount = (el) => {
  console.log("mount");
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("dashboard-root");
  if (root) {
    mount(root);
  }
}

export { mount };
