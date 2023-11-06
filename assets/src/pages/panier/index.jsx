import React, { useEffect, useState } from "react";
import SubmitCart from "./functions/submit";

const Panier = () => {

  useEffect(() => {
    const domain = JSON.parse(localStorage.getItem("domain") || "[]");
    const server = JSON.parse(localStorage.getItem("server") || "[]");
    const database = JSON.parse(localStorage.getItem("database") || "[]");

    const totalCart = domain.price + server.price + database.price;

    window.localStorage.setItem("cart", JSON.stringify({ total: totalCart }));
  }, []);

  return <SubmitCart />;
};

export default Panier;
