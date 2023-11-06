const AddServer = (pack, price) => {
  window.localStorage.setItem(
    "server",
    JSON.stringify({ name: pack, price: price })
  );
  const currentServer = JSON.parse(window.localStorage.getItem("server"));

  alert(
    `Vous avez choisi un type de serveur ${currentServer.name} au prix de ${currentServer.price}€ !`
  );
};

export default AddServer;
