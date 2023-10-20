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
import UpdateCarPage from "./pages/UpdateCarPage/UpdateCarPage";
import AuthProvider from "./Providers/AuthProvider";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PrivateRoute from "./Routes/PrivateRoute";

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
        element: <PrivateRoute><AddCarPage></AddCarPage></PrivateRoute>,
      },
      {
        path: "/brand/:brandName",
        element: <OneBrandAllCarShowPage></OneBrandAllCarShowPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/brand/${params.brandName}`),
      },
      {
        path: "/brand/:brandName/:id",
        element: <PrivateRoute><CarDetailsInfoPage></CarDetailsInfoPage></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/brand/${params.brandName}/${params.id}`),
      },
      {
        path: "/updateCar/:brandName/:id",
        element: <PrivateRoute><UpdateCarPage></UpdateCarPage></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/brand/${params.brandName}/${params.id}`),
      },
      {
        path: "/cart",
        element: <PrivateRoute><MyCartPage></MyCartPage></PrivateRoute>,
        loader: () => fetch("http://localhost:5001/cart"),
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
