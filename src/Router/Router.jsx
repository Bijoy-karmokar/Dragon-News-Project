import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../components/Navbar/About";
import CategoryNews from "../components/News/CategoryNews";

const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/about',
                Component:About
            },
            {
                path:"category/:id",
                Component:CategoryNews
            }
        ]
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