import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/index";
import Login from "../../pages/login";
import Register from "../../pages/register";

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
