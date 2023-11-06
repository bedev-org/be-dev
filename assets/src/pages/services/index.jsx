import React,{useEffect,useState} from "react";
import axios from "axios";

const Services = () => {
  const [userData, setUserData] = useState(null);
  const [testData,setTestData]= useState([])

  useEffect(() => {
  
    axios.get("/serialize-user") // Utilisez l'URL appropriée pour accéder à l'action Symfony
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
      });
  }, []);

  return (
    <>
      <h1>Hello services</h1>
      {userData && (
        <div className="bg-red-800">
          <h2>User Data</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}

<h1>Location_database</h1>
<div className="grid grid-cols-3">
  {testData.map((testData) => (
    <div key={testData['@id']}>
      <h2>Titre : {testData.username_database}</h2>
      <h2>Password: {testData.password_database}</h2>
      <h2>Host: {testData.host_database}</h2>
      <h2>Port: {testData.port_database}</h2>
      <h2>Name: {testData.name_database}</h2>
      <h2>Stockage: {testData.stockage_database}</h2>
    </div>
  ))}
</div>
    </>
  );
};
export default Services;
