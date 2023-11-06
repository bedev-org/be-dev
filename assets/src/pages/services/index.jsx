import React,{useEffect,useState} from "react";


import axios from "axios";



const Services = () => {
  const [userData, setUserData] = useState(null);
  const [testData, setTestData] = useState([]);
  const[database, setDatabase]= useState([])
  const[newDomain,setNewDomain]= useState({
  nameDomain: "",
});
const [count, setCount] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
const tarif = 10

function handleClick() {
  const newTotalPrice = (count + 1) * tarif;
  setTotalPrice(newTotalPrice);
  localStorage.setItem("totalPrice", newTotalPrice.toString());
  setCount(count + 1);

}


  useEffect(() => {
    axios.get("/serialize-user")
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error("Erreur récupération des données de l'utilisateur", error);
      });
      locationdomain();
      locationdatabase();
  }, []);

  const locationdomain = () => {
    axios.get("http://localhost:8000/api/location_domaines")
      .then((response) => {
        setTestData(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de locationdomain", error);
      });
  }

  const locationdatabase =() =>{

    axios.get("http://localhost:8000/api/location_databases")
    .then((response) => {
      setDatabase(response.data["hydra:member"]);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données de locationdomain", error);
    });
  }

  const addDomain =()=>{

    axios.post("http://localhost:8000/api/location_domaines",newDomain,config)
    
    .then(() => {
      alert("Domaine crée !");

      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const config = {
    headers: {
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTkwMTU1MjQsImV4cCI6MTY5OTAxOTEyNCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGJlLWRldi5vcmcifQ.paL8FEGErYum8bhaMf8OIAss8k3PAuxRifpHhvhEFyfOIfHD48L1wHTjWHdsR_LHA-KByMaTsk5PBZUSL9vFhj-LNM4UKSlcLJM1vBrSLT3epLhjOZR4YV6z-Pii7JNgUeacXi5Zn0wINtmXVYkyDv3cC0l4qBZTnSUFQzi8ob2F7lIuQ5RS27AcuSXE2H6JSzxeE16kOG5higgslmqUuFwdT0ThU2Pj0Xw_iBs050VJ9tiQMRecuR2sa1Ukxvz0dLP_cpVZhUEGq75Cl8kRegU-0fASLoaArjaBXz4cX3kwN8kqrlWm8NyicCQMR4UMJPR1V9sLcZGZHvEeGF9YOw`,
      'Content-Type': 'application/ld+json'
    },
  };
  const domain = {
    nameDomain: newDomain.nameDomain,
 
  };

  const handleButtonClick =(database) => {
    
     return database.stockage_database <= 50;
    }
 
  

  return (
    <>
      <h1>Hello services</h1>
      {userData && (
        <div className="bg-neutral-400">
          <h2 className="flex justify-center bg-red-500">User Data</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
<h1 className="w-full flex justify-center bg-orange-500">Name_Domain</h1>
      <div className="grid grid-cols-2">
        {testData.map((data) => (
          <div key={data['@id']}>
            <h2>Son id : {data.id}</h2>
            <h2>Nom de Domaine: {data.name_domain}</h2>
          </div>
        ))}
  
      </div>

      <h1 className="w-full flex justify-center bg-cyan-500"> Database</h1>
      <div className="grid grid-cols-3">
        {database.map((database) => (
          <div  key={database['@id']}>
            <h1>ID: {database.id}</h1>
            <h1>Nom : {database.name_database}</h1>
            <h2>Titre : {database.username_database}</h2>
            <h2>Password: {database.name_database}</h2>
            <h3>Port: {database.port_database}</h3>
            <h4>Capacité :{database.stockage_database}Go</h4>
            <button className="bg-green-500" onClick={database} >Selectionner </button>
          </div>
        ))}
  
      </div>
      <div>
       
      </div>
<div>
  <h1 className="w-full flex justify-center bg-green-600">Création de domaine </h1>
      <form action="" >
      <label htmlFor="nameDomain">Nom de domaine</label>
      <input  type="text"
            id="nameDomain"
            name="nameDomain"
            value={newDomain.nameDomain}
            onChange={(event) =>
                  setNewDomain({ ...newDomain, nameDomain: event.target.value })
                } />
      </form>
      <button
          type="button"
          onClick={addDomain}
        >
          Envoyer
        </button>
      </div>

      <h1 className="bg-yellow-600 w-full flex justify-center">Calcul de Total panier</h1>
      <p>Nombre d'articles : {count}</p>
      <p>Tarif unitaire : {tarif}€</p>
      <p>Total : {totalPrice}€</p>
      <button className="bg-purple-600" onClick={handleClick}>Augmenter le nombre d'articles</button>
    
    </>
  );

};

export default Services;