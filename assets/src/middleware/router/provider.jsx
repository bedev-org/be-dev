import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/index"


export const Provider = createBrowserRouter([
    {
      path: "/",
      element:  <Home />
    },
]);
