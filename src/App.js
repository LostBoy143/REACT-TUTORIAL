import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import FakeStore from "./components/FakeStore";
// import { createBrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/store",
    element: <FakeStore />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <RouterProvider router={appRouter} />
);
