import React, { useEffect, useState } from "react";
import axios from "axios";
import GetServer from "./getServer";

const SubmitCart = () => {
  const HandleSubmit = () => {
    if (
      !JSON.parse(window.localStorage.getItem("database")) &&
      !JSON.parse(window.localStorage.getItem("server")) &&
      !JSON.parse(window.localStorage.getItem("domain"))
    ) {
      alert("Choisissez un ou plusieurs services");
    } else if (JSON.parse(window.localStorage.getItem("server"))) {
      GetServer();
    }
  };

  return (
    <>
      <button
        type="button"
        className="p-4 bg-orange-300 uppercase font-bold text-black"
        onClick={() => HandleSubmit()}
      >
        Valider panier
      </button>
    </>
  );
};

export default SubmitCart;
