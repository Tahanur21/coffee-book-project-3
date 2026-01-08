import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import { Component } from "react";
import CoffeeCards from "../CoffeeCards/CoffeeCards";

const Routes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayOut,
        errorElement: <ErrorPage/>,
        children : [
            {
                path: '/',
                Component: Home,
                loader: ()=> fetch('../../../public/categories.json'),
                children: [
                    {
                        path: '/coffeeCards/:category',
                        Component: CoffeeCards,
                        loader: ()=> fetch('../../../public/coffees.json')
                    }
                ]
            },
            {
                path: '/coffees',
                Component: Coffees,
            },
            {
                path: '/dashboard',
                Component: Dashboard,
            }
        ]
    }
])

export default Routes;