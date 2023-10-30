import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/index"
import Services from "../../pages/services";

export const Provider = createBrowserRouter([
    {
      path: "/",
      element:  <Home />
    },
    {
      path: "/services",
      element:  <Services />
    },
]);
