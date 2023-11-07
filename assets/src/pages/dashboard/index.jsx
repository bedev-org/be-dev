import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import Footer from "../../components/layouts/footer";
import Navbar from "../components/layouts/header";
import EditUser from "./functions/edit";
import DeleteUser from "./functions/delete";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    axios
      .get("/serialize-user") // Utilisez l'URL appropriée pour accéder à l'action Symfony
      .then((response) => {
        setUserData(response.data.user);

        const data = {
          username: JSON.stringify(userData.email.replace("", "")),
          password: JSON.stringify(userData.password.replace("", "")),
        };

        axios.post("/api/login_check", data).then((response) => {
          setToken(response.data.token);
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur",
          error
        );
      });
  }, []);

  return (
    <section class="whitebedev-text body-font blackbedev">
      <Navbar />
      {userData && (
        <>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                src="https://source.unsplash.com/random/500x400/?man "
                alt=""
                class="w-20 h-20  object-cover object-center rounded-full inline-block border-2"
              />
              <div class="text-center lg:w-2/3 w-full">
                <section class="whitebedev-text body-font">
                  <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full">
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Prénom
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.firstName.replace("", ""))}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Nom
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.lastName.replace("", ""))}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Adresse email
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.email.replace("", ""))}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Téléphone
                        </h2>

                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.phone)}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-r-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Adresse postale
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.adress.replace("", ""))}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <section class="whitebedev-text body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="-my-8 divide-y-2 divide-gray-100">
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font yellowbedev-text">
                      Serveurs
                    </span>
                    <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                  </div>
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium yellowbedev-text title-font mb-2">
                      Bitters hashtag waistcoat fashion axe chia unicorn
                    </h2>
                    <p class="leading-relaxed">
                      {userData.currentServices ? (userData.currentServices.map((services) => {
                        if (services.locationServer) {
                          return (
                            <div className="grid grid-cols-2 py-2">
                              {services.locationServer.map((server) => {
                                return (
                                  <div className="pl-2">
                                    <h1>
                                      Nom d&apos;utilisate:{" "}
                                      {server.usernameServer}
                                    </h1>
                                    <h1>
                                      Mot de passe : {server.passwordServer}
                                    </h1>
                                    <h1>
                                      Nom d&apos;hôte : {server.hostServer}
                                    </h1>
                                    <h1>
                                      Port par défaut : {server.portServer}
                                    </h1>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                      })):(<div className="text-2xl lg:px-56">
                      <h1>Veuillez choisir un serveur pour le voir s&apos;afficher içi</h1>
                    </div>)}
                    </p>
                  </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font yellowbedev-text">
                      Nom de domaine
                    </span>
                    <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                  </div>
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium yellowbedev-text title-font mb-2">
                      Meditation bushwick direct trade taxidermy shaman
                    </h2>
                    <p>
                      {userData.currentServices ? (userData.currentServices.map((services) => {
                        if (services.locationDomain) {
                          return (
                            <div className="grid grid-cols-2 py-2">
                              {services.locationDomain.map((domain) => {
                                return (
                                  <div className="pl-2">
                                    <h1>Nom de domain: {domain.nameDomain}</h1>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                      })):(<div className="text-2xl lg:px-44">
                      <h1>Veuillez choisir un nom de domaine pour le voir s&apos;afficher içi</h1>
                    </div>)}
                    </p>
                  </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font yellowbedev-text">
                      Base de donné
                    </span>
                    <span class="text-sm text-gray-500">12 Jun 2019</span>
                  </div>
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium yellowbedev-text title-font mb-2">
                      Woke master cleanse drinking vinegar salvia
                    </h2>
                    <p class="leading-relaxed">
                      {userData.currentServices ? (userData.currentServices.map((services) => {
                        if (services.locationDatabase) {
                          return (
                            <div className="grid grid-cols-2 py-2">
                              {services.locationDatabase.map((database) => {
                                return (
                                  <div className="pl-2">
                                    <h1>
                                      Nom d&apos;utilisateur de la base de
                                      donnée : {database.usernameDatabase}
                                    </h1>
                                    <h1>
                                      Mot de passe : {database.passwordDatase}
                                    </h1>
                                    <h1>
                                      Nom d&apos;hôte : {database.hostDatabase}
                                    </h1>
                                    <h1>
                                      Port par défaut : {database.portDatabase}
                                    </h1>
                                    <h1>
                                      Nom de la base de donnée :{" "}
                                      {database.nameDatabase}
                                    </h1>
                                    <h1>
                                      Stockage : {database.stockageDatabase}
                                    </h1>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                      })):(<div className="text-2xl lg:px-44">
                        <h1>Veuillez choisir une base de donnée pour la voir s&apos;afficher içi</h1>
                      </div>)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-evenly">
            <div>
              <button
                className="p-2 bg-red-500 uppercase font-bold"
                onClick={() => DeleteUser(userData.id, token)}
              >
                Supprimer mon compte
              </button>
            </div>
            
          </div>
        </>
      )}
      <Footer />
    </section>
  );
};

export default Dashboard;
