import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"

import Instructors from "../pages/instructors/Instructors";
import Login from "../utils/user/Login";
import Register from "../utils/user/Register";
import DashboardLayout from "../layout/DashboardLayout";
//import Dashboard from "../pages/dashboard/dashboard";

import Market from "../pages/dashboard/student/Market/Market";

import Paiment from "../pages/dashboard/student/paiment/paiment";
import Crud from "../pages/dashboard/student/crud/crud";
import { Toaster } from "sonner";

import { BudgetDetails } from "@/pages/dashboard/BudgetDetails";


import StateStatsPage from "@/pages/dashboard/student/Market/StateStatsPage";
//import  Store  from "@/pages/dashboard/Store";
import { BudgetDetail } from "@/pages/dashboard/student/paiment/Budgetdetail";
import StateStatssPage from "@/pages/dashboard/student/Market/StateStatsPagee";
import Registerr from "@/utils/user/registerr";
import St from "@/pages/dashboard/student/Market/st";
import Stt from "@/pages/dashboard/student/Market/stt";

import Markett from "@/pages/dashboard/student/Market/Markett";
import Storee from "@/pages/dashboard/storee";
import App from "@/pages/dashboard/Store"








export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "instructors", element: <Instructors /> },
      { path: "classes", element: <Classes /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
         { path: "registerr", element: <Registerr /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
    //  { index: true, element: <Dashboard /> },
      
      { path: "state/:state", element: <StateStatsPage /> },
         { path: "statee/:statee", element: <StateStatssPage /> },
          { path: "st/:state", element: <St /> },
         { path: "stt/:statee", element: <Stt /> },
      { path: "crud", element: <Crud /> },
      { path: "paiment", element: <Paiment /> },
      { path: "market", element: <Market /> },
       { path: "markett", element: <Markett /> },
          //  { path: "markett", element: <Markett /> },
    

      
      { path: "budget/:budgetId", element: <BudgetDetails /> },

   
      { path: "budgett/:budgettId", element: <BudgetDetail /> },
    ],
  },
  {
    path: "/store",
    element: <App/>,
  },
]);

export default router;