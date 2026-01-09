import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import { Component } from "react";
import CoffeeCards from "../CoffeeCards/CoffeeCards";
import CoffeeDetails from "../CoffeeDetails/CoffeeDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("../../../public/categories.json"),
        children: [
          {
            path: "/",
            Component: CoffeeCards,
            loader: () => fetch("../../../public/coffees.json"),
          },
          {
            path: "/coffeeCards/:category",
            Component: CoffeeCards,
            loader: () => fetch("../../../public/coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        Component: Coffees,
        loader: () => fetch("../../../public/coffees.json"),
      },
      {
        path: "/dashboard/",
        Component: Dashboard,
      },
      {
        path: "/coffeeDetails/:id",
        Component: CoffeeDetails,
        loader: () => fetch("../../../public/coffees.json"),
      },
    ],
  },
]);

export default Routes;
