import React from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import { Provider } from "./provider";
import { CookiesProvider } from "react-cookie";

const Router = ()=>{
    const container=document.getElementById("root");
    const root= createRoot(container);
    root.render(
        <CookiesProvider>
            <RouterProvider router={Provider}/>
        </CookiesProvider>
    );
};

export default Router;
