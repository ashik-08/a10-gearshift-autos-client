import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import OneBrandAllCarShowPage from "./pages/OneBrandAllCarShowPage/OneBrandAllCarShowPage";
import CarDetailsInfoPage from "./pages/CarDetailsInfoPage/CarDetailsInfoPage";
import MyCartPage from "./pages/MyCartPage/MyCartPage";

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
        path: "/brand/:brandName",
        element: <OneBrandAllCarShowPage></OneBrandAllCarShowPage>,
        loader: ({ params }) => fetch(`http://localhost:5001/brand/${params.brandName}`),
      },
      {
        path: "/brand/:brandName/:id",
        element: <CarDetailsInfoPage></CarDetailsInfoPage>,
        loader: ({ params }) => fetch(`http://localhost:5001/brand/${params.brandName}/${params.id}`),
      },
      {
        path: '/cart',
        element: <MyCartPage></MyCartPage>,
        loader: () => fetch("http://localhost:5001/cart"),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
