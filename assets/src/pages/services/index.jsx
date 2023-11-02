import React,{useEffect,useState} from "react";


import axios from "axios";

const Services = () => {
  const [userData, setUserData] = useState(null);
  const [testData, setTestData] = useState([]);
  const[database, setDatabase]= useState([])

  useEffect(() => {
    axios.get("/serialize-user")
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
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
      setTestData(response.data["hydra:member"]);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données de locationdomain", error);
    });
  }

  return (
    <>
      <h1>Hello services</h1>
      {userData && (
        <div className="bg-red-800">
          <h2>User Data</h2>
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
        {database.map((database) => (
          <div key={database['@id']}>
            <h2>Titre : {database.user_name}</h2>
            <h2>Password: {database.name_domain}</h2>
            <h3>Port: {database.port_database}</h3>
          </div>
        ))}
  
      </div>
    </>
  );
};

export default Services;