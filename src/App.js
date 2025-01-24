import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router";
import {
  createContext,
  useState,
  lazy,
  Suspense,
} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
const FakeStore = lazy(() =>
  import("./components/FakeStore")
);
import UserContext from "./contexts/UserContext";

const AppLayout = () => {
  const [user, setUser] = useState("Shubham");
  const [user2, setUser2] = useState("Sahu");
  return (
    <UserContext.Provider
      value={{ user, setUser, user2, setUser2 }}
    >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/store",
        element: (
          <Suspense fallback={<Shimmer />}>
            <FakeStore />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <RouterProvider router={appRouter} />
);
