import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SingleProduct from "../Pages/Products/SingleProduct";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import EditProfile from "../Pages/Dashboard/EditProfile";
import Profile from "../Pages/Dashboard/Profile";

const createRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children: [
            {
              path: "/",
              element:<Home></Home>,
            },
            {
                path: "/about",
                element:<About></About>,
              },
              {
                path: "/products",
                element:<Products></Products>,
                loader:() => fetch(`https://dummyjson.com/products`)
              },
              {
                path: "/products/:id",
                element:<SingleProduct></SingleProduct>,
                loader:({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
              },
              {
                path: "/dashboard",
                element:<Dashboard></Dashboard>,
                children: [
                  {
                    path: "/dashboard",
                    element:<DashboardHome></DashboardHome>,
                  },
                  {
                    path: "/dashboard/profile",
                    element:<Profile></Profile>,
                  },
                  {
                    path: "/dashboard/editProfile",
                    element:<EditProfile></EditProfile>,
                  },

                ]
              },
          ],
    }
])


export default createRoute;