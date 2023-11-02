import React,{useEffect,useState} from "react";


import axios from "axios";


const Services = () => {
  const [userData, setUserData] = useState(null);
  const [testData, setTestData] = useState([]);
  const [domaineData,setDomaineData] =useState([])

  useEffect(() => {
    // Récupérer les données de l'utilisateur
    axios
      .get("/serialize-user") // Utilisez l'URL appropriée pour accéder à l'action Symfony
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
      });
  }, []);

  const locationdatabase = () => {
    // Récupérer les données de produits
    axios
      .get('http://localhost:8000/api/location_databases')
      .then((response) => {
        // Extraire le tableau de données de la réponse
        setTestData(response.data['hydra:member']);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de produits", error);
      });
  };

  const locationdomain =() =>{

    axios
    .get ('http://localhost:8000/api/location_domains')
    .then((response)=>{
        setDomaineData(response.data['hydra:member']);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de produits", error);
    });
  };

  return (
    <>
      <h1>Hello services</h1>
      {userData && (
        <div className="bg-red-800">
          <h2>User Data</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}

      {testData.map((testData) => (
        <div key={testData['@id']}>
          <h1 className="w-full flex justify-center bg-orange-500">Location_database</h1>
          <div className="grid grid-cols-3">
          <h2>Titre : {testData.username_database}</h2>
          <h2>Password: {testData.password_database}</h2>
          <h2>Host: {testData.host_database}</h2>
          <h2>Port: {testData.port_database}</h2>
          <h2>Name: {testData.name_database}</h2>
          <h2>Stockage: {testData.stockage_database}</h2>
          </div>
        </div>
      ))}

      <button className="bg-green-800 rounded-full  flex flex-row justify-center mx-40" onClick={locationdatabase}>Database</button>
   
   
      {domaineData.map((domaineData) => (
        <div key={domaineData['@id']}>
          <h1 className="w-full flex justify-center bg-orange-500">Location_domains</h1>
          <div className="grid grid-cols-3">
          <h2>Type : {domaineData.name_domain}</h2>
        
          </div>
        </div>
      ))}
   <button className="bg-green-800 rounded-full  flex flex-row justify-center mx-40" onClick={locationdomain}>Domain</button>
   
   
    </>


  );
};

export default Services;