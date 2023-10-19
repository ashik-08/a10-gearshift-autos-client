import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import OneBrandAllCarShowPage from "./pages/OneBrandAllCarShowPage/OneBrandAllCarShowPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("http://localhost:5001/brand"),
      },
      {
        path: "/addCar",
        element: <AddCarPage></AddCarPage>,
      },
      {
        path: "/:brandName",
        element: <OneBrandAllCarShowPage></OneBrandAllCarShowPage>,
        loader: ({ params }) => fetch(`http://localhost:5001/brand/${params.brandName}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
