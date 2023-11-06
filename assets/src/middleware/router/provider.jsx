import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/index";
import Services from "../../pages/services";
import Contact from "../../pages/contact";
import Dashboard from "../../pages/dashboard";
<<<<<<< HEAD
import Login from "../../pages/login";
import Register from "../../pages/register";
import Panier from "../../pages/panier";
import Rgpd from "../../pages/rgpd";
=======
>>>>>>> b8f0effe662150016ec3279a078ede563f49dd14

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profil",
    element: <Dashboard />,
  },
<<<<<<< HEAD
  {
    path: "/panier",
    element: <Panier />,
  },
  {
    path: "/rgpd",
    element: <Rgpd />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
=======
>>>>>>> b8f0effe662150016ec3279a078ede563f49dd14
]);
