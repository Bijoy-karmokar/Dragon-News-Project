import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayouts,
    },
    {
        path:"/auth",
        
    },
    {
        path:"/news",

    },
    {
        path:"*",
        Component:ErrorPage

    }
])
export default router;