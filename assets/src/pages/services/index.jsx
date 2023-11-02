import React,{useEffect,useState} from "react";


import axios from "axios";

const Services = () => {
  const [userData, setUserData] = useState(null);
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    axios.get("/serialize-user")
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
      });
  }, []);

  const locationdomain = () => {
    axios.get("http://localhost:8000/api/location_domains")
      .then((response) => {
        setTestData(response.data); // Utilisez response.data au lieu de response
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
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

      <div className="grid grid-cols-3">
        {testData.map((testData) => (
          <div key={testData['@id']}>
            <h2>Titre : {testData.id}</h2>
            <h2>Password: {testData.name_domain}</h2>
          </div>
        ))}
      </div>

      <div>
        <button
          type="button"
          className=""
          onClick={locationdomain}
        >
          locationdomain
        </button>
      </div>
    </>
  );
};

export default Services;
