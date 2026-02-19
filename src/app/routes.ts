import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "privacy", Component: Privacy },
      { path: "support", Component: Support },
    ],
  },
]);
