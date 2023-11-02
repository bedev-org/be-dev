<<<<<<< HEAD
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
=======
import React from "react";
import PriceCard from "../components/layouts/priceCard/priceCard";
import FavoriteCard from "../components/layouts/priceCard/favoriteCard";
import UltimateCard from "../components/layouts/priceCard/ultimateCard";

const Services = () => {
  return (
    <body className="blackbedev">
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 ">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Nos services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
          </div>
          <div>
            <h2 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Location nom de domaine
            </h2>
            <div className="w-full flex justify-center items-center">
              <FavoriteCard />
            </div>
          </div>
          <div className="">
            <div>
              <h2 className="border-yellow rounded-2xl sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
                Location Base de données
              </h2>
            </div>
            <div className=" w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b border-white/20 pb-10">
              <PriceCard />
              <FavoriteCard />
              <UltimateCard />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center h-[80px]">
              <h2 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white border-yellow rounded-lg w-1/2">
                Location de serveur
              </h2>
            </div>
            <div className=" w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b border-white/20 pb-10">
              <PriceCard />
              <FavoriteCard />
              <UltimateCard />
            </div>
          </div>
        </div>
      </section>
    </body>
>>>>>>> 069b6d7637329076c57166ffc2727a9028b7b5f0
  );
};
export default Services;
