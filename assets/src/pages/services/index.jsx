import React,{useEffect,useState} from "react";
import axios from "axios";

const Services = () => {
  const [userData, setUserData] = useState(null);

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
    </>
  );
};
export default Services;
