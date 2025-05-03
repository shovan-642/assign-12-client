import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableCamps from "../pages/AvailableCamps";
import CampDetails from "../pages/CampDetails";
import Dashboard from "../Layout/Dashboard";
import Analytics from "../pages/Dashboard/Participant/Analytics";
import PaymentHistory from "../pages/Dashboard/Participant/PaymentHistory";
import RegisteredCamps from "../pages/Dashboard/Participant/RegisteredCamps";
import AddCamp from "../pages/Dashboard/Admin/AddCamp";
import ManageCamp from "../pages/Dashboard/Admin/ManageCamp";
import ManageRegisteredCamp from "../pages/Dashboard/Admin/ManageRegisteredCamp";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

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
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/available_camps",
        element: <AvailableCamps></AvailableCamps>,
      },
      {
        path: "/camp-details/:campId",
        element: <CampDetails></CampDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      // user dashboard
      {
        path:"analytics",
        element: <Analytics></Analytics>
      },
      {
        path:"payment-history",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:"registered-camps",
        element: <RegisteredCamps></RegisteredCamps>
      },

      // admin dashboard
      {
        path:"add-camp",
        element: <AdminRoutes><AddCamp></AddCamp></AdminRoutes>
      },
      {
        path:"manage-camp",
        element: <AdminRoutes><ManageCamp></ManageCamp></AdminRoutes>
      },
      {
        path:"manage-registered-camp",
        element: <AdminRoutes><ManageRegisteredCamp></ManageRegisteredCamp></AdminRoutes>
      },
    ]
  }
]);
