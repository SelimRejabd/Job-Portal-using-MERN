// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "@/components/shared/Navbar";
import Login from "@/components/auth/Login";
import SignUp from "@/components/auth/SignUp";
import HomePage from "@/components/HomePage";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
]);

export default router;
