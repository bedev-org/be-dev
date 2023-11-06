import React from "react";
import axios from "axios";

const AddDb = (pack, price) => {
  window.localStorage.setItem(
    "database",
    JSON.stringify({ name: pack, price: price })
  );

  const currentPack = JSON.parse(window.localStorage.getItem("database"));

  alert(
    `Vous avez choisi une base de données ${currentPack.name} au prix de ${currentPack.price}€ !`
  );
};

export default AddDb;
