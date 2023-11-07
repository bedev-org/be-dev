import React, { useEffect, useState } from "react";
import Cart from "./functions/cart";

const Panier = () => {
  useEffect(() => {
    const domain = JSON.parse(localStorage.getItem("domain") || "[]");
    const server = JSON.parse(localStorage.getItem("server") || "[]");
    const database = JSON.parse(localStorage.getItem("database") || "[]");

    const totalCart = (domain.price ?? + 0) + (server.price ?? + 0) + (database.price ?? + 0);

    window.localStorage.setItem("cart", JSON.stringify({ total: totalCart }));
  }, []);

  return <Cart />;
};

export default Panier;

