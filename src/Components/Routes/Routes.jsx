import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";

const Routes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayOut,
        errorElement: <ErrorPage/>,
        children : [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: ()=> fetch('../../../public/categories.json')
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