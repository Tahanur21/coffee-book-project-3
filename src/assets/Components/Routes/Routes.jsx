import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";

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
            }
        ]
    }
])

export default Routes;