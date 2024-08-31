// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "@/components/shared/Navbar";
import Login from "@/components/pages/Login";
import SignUp from "@/components/pages/SignUp";
import HomePage from "@/components/pages/HomePage";
import Jobs from "@/components/pages/Jobs";
import Footer from "@/components/shared/Footer";
import Browse from "@/components/pages/Browse";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
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
  {
    path: "/jobs",
    element: (
      <Layout>
        <Jobs />
      </Layout>
    ),
  },
  {
    path: "/browse",
    element: (
      <Layout>
        <Browse />
      </Layout>
    ),
  }
]);

export default router;
