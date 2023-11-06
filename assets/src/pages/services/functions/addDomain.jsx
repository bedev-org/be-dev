const AddDomain = (pack, price) => {
  window.localStorage.setItem(
    "domain",
    JSON.stringify({ name: pack, price: price })
  );
  
  const currentDomain = JSON.parse(window.localStorage.getItem("domain"));

  alert(
    `Vous avez choisi le domaine ${currentDomain.name} au prix de ${currentDomain.price}€ !`
  );
};

export default AddDomain;
