import React,{useEffect,useState} from "react";


import axios from "axios";

const Services = () => {
  const [userData, setUserData] = useState(null);
  const [testData, setTestData] = useState([]);
  const[database, setDatabase]= useState([])
  const[newDomain,setNewDomain]= useState({
  nameDomain: "",
});

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
    axios.get("http://localhost:8000/api/location_domains")
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

    axios.post("http://localhost:8000/api/location_domains",newDomain)
    
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
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTgyMzU5MzYsImV4cCI6MTY5ODIzOTUzNiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQG5hdHVyb3BpZWQuZnIifQ.a6uK7VniuY86lN33Fg_MAFrqchKxJA27EXMPRzuQWbBeCtnki1A4pNyfy5Hnf3eJN0FSkLdhZcehLBJ_lXm6Kn2ajht8uZpLFodKG_4-0FVCBAOs5CKEdV7tpDY5IFZzTpbqDDHHzyUfdBVbkX2xuWtJsEe3nHkVJSUtkTFgt6wvZ6-M3zo_Wt1obyGx0_v1uXTRC5XtAPPIz39AOvARsVeXK6kDEdbTX8svNVWxsECmDG6C3HPzieBvqSNXjosykybtCQqU94-IwNIpBeUyresetHNkxTRqdOfgkU14RMV-znFJD1OJE_EaVa-EvELDuu6u7xyWSvKjetPF-vK3VQ`,
    },
  };
  const domain = {
    nameDomain: newDomain.nameDomain,
 
  };

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
        {testData.slice(0,10).map((data) => (
          <div key={data['@id']}>
            <h2>Son id : {data.id}</h2>
            <h2>Nom de Domaine: {data.name_domain}</h2>
          </div>
        ))}
  
      </div>

      <h1 className="w-full flex justify-center bg-cyan-500"> Database</h1>
      <div className="grid grid-cols-3">
        {database.slice(0,10).map((database) => (
          <div key={database['@id']}>
            <h1>Nom : {database.name_database}</h1>
            <h2>Titre : {database.username_database}</h2>
            <h2>Password: {database.name_database}</h2>
            <h3>Port: {database.port_database}</h3>
            <h4>Capacité :{database.stockage_database} Go</h4>
          </div>
        ))}
  
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
    </>
  );
};

export default Services;