import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import Layout from "./pages/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },

        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "services",
          element: <ServicePage/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
