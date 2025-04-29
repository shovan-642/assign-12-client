import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
   {
    path: "/",
    element: <Home></Home>,
   },
   {
    path: "/register",
    element: <Register></Register>
   },
   {
    path: "/login",
    element: <Login></Login>
   },
      ]
    },
  ]);

