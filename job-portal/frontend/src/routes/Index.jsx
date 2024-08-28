// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/components/auth/Login";
import SignUp from "@/components/auth/SignUp";
import HomePage from "@/components/HomePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    }
  ]);
  
  export default router;