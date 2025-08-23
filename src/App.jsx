import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import Layout from "./pages/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import BookingPage from "./pages/BookingPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

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
          element: <ServicePage />,
        },
        {
          path: "booking",
          element: <BookingPage />,
        },
        {
          path : "testimonials",
          element : <TestimonialsPage/>
        },
        {
          path : "contact",
          element : <ContactPage/>
        },
        {
          path : "service-details",
          element : <ServiceDetailsPage/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
