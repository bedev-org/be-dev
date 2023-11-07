import React,{useEffect,useState} from "react";
import axios from "axios";

const Dashboard = () => {
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
      <h1 className="font-bold w-full flex flex-row text-green-500 justify-center text-2xl bg-black">
        Hello Dashboard !!!
      </h1>
    </>
  );
};
export default Dashboard;
