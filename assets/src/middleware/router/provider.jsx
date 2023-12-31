import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/index";
import Services from "../../pages/services";
import Contact from "../../pages/contact";
import Dashboard from "../../pages/dashboard";
import Panier from "../../pages/panier";
import LegalNotice from "../../pages/rgpd/legalNotice";
import Confidentialite from "../../pages/rgpd/confidentialite";

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
  {
    path: "/panier",
    element: <Panier />,
  },
  {
    path: "/legal-notice",
    element: <LegalNotice />,
  },
  {
    path: "/confidentialite",
    element: <Confidentialite />,
  },
]);
