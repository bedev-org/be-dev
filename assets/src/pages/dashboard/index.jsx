import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import Footer from "../../components/layouts/footer";
import Navbar from "../components/layouts/header";
import EditUser from "./functions/edit";
import DeleteUser from "./functions/delete";
import axios from "axios";
import bcrypt from "bcryptjs-react";
import Introduction from "../home/introduction";
import { Token } from "../../middleware/token";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const token = Token.get("access_token");

  useEffect(() => {
    axios
      .get("/serialize-user")
      .then((response) => {
        setUserData({
          id: response.data.user.id,
          token: token,
          email: response.data.user.email,
          password: response.data.user.password,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          address: response.data.user.address,
          company: response.data.user.company,
          currentServices: response.data.user.currentServices,
          phone: response.data.user.phone,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section class="whitebedev-text body-font blackbedev">
      <Navbar />
      <div
        style={{
          backgroundImage:
            ' url("https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGRhc2hib2FyZCUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D")',
        }}
        class="flex justify-center border rounded-lg p-5 md:p-20 lg:p-44 backgroundImageClass"
      >
        <div className="flex flex-col text-center justify-center items-center max-w-7xl whitebedev-text font-bold ">
          <div className="text-2xl lg:text-3xl font-medium title-font  mx-96 text-black yellowbedev p-6 rounded-md shadow-lg">
            <h1 class="text-xl uppercase">Profil</h1>
            <span class="underline underline-offset-2 blackbedev-text -mt-3">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </span>
            <div class="flex flex-col whitebedev-text mt-5">
              <p class="text-xl mt-2 md:mt-4 inline-block px-2">
                Noms de domaine - Bases de données - Serveurs
              </p>
            </div>
          </div>

          <p className="mt-20 text-sm md:w-[52%] tracking-wide leading-7 blackbedev rounded-md g:text-xl y p-6">
            🚀 Bienvenue sur votre profil ! <p className="pt-4"> Vous pouvez consulter vos abonnements en cours et ajuster votre profil selon vos préférences! </p>
          </p>
        </div>
      </div>
      {userData && (
        <>
          <section class=" body-font">
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
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-r-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Prénom
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.firstName)}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-r-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Nom
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.lastName)}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-r-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Adresse email
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.email)}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-r-2 border-gray-200 border-opacity-60">
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
                          {JSON.stringify(userData.address)}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="whitebedev-text">
                  <Popup
                    trigger={
                      <button className="p-2 bg-green-500 uppercase font-bold">
                        Modifier informations personnelles
                      </button>
                    }
                  >
                    <section className="bg-black items-center justify-center flex">
                      <div className="blackbedev border-2 border-black flex flex-col items-center justify-center h-[50rem] w-[40rem] my-12">
                        <div className="flex items-center justify-center">
                          <img
                            className="mt-16"
                            height="150px"
                            width="150px"
                            src={"/images/logos/be-dev.svg"}
                            alt="Be-dev"
                          />
                        </div>

                        <h1 className="yellowbedev-text text-4xl py-8">
                          Mo<span className="text-white">difier</span>
                        </h1>
                        <form
                          className="text-center items-center justify-center h-full w-full"
                          method="post"
                        >
                          <input
                            className="p-2 border-2 border-black w-80"
                            type="text"
                            placeholder="Prénom"
                            onChange={(event) => {
                              setUserData({
                                ...userData,
                                firstName: event.target.value,
                              });
                            }}
                          />
                          <input
                            className="p-2 border-2 border-black w-80"
                            type="text"
                            placeholder="Nom de famille"
                            onChange={(event) => {
                              setUserData({
                                ...userData,
                                lastName: event.target.value,
                              });
                            }}
                          />
                          <input
                            className="p-2 border-2 border-black w-80"
                            type="text"
                            placeholder="E-mail"
                            onChange={(event) => {
                              setUserData({
                                ...userData,
                                email: event.target.value,
                              });
                            }}
                          />

                          <input
                            className="p-2 border-2 border-black w-80"
                            type="text"
                            placeholder="Société"
                            onChange={(event) => {
                              setUserData({
                                ...userData,
                                company: event.target.value,
                              });
                            }}
                          />

                          <input
                            className="p-2 border-2 border-black w-80"
                            type="text"
                            placeholder="Adresse postale"
                            onChange={(event) => {
                              setUserData({
                                ...userData,
                                address: event.target.value,
                              });
                            }}
                          />

                          <input
                            className="p-2 border-2 border-black w-80"
                            type="text"
                            placeholder="Téléphone"
                            onChange={(event) => {
                              setUserData({
                                ...userData,
                                phone: parseInt(event.target.value),
                              });
                            }}
                          />

                          <input
                            className="p-2 border-2 border-black w-80"
                            type="password"
                            placeholder="Mot de passe"
                            onChange={(event) => {
                              setUserData({
                                ...userData,
                                password: bcrypt.hashSync(
                                  event.target.value,
                                  10
                                ),
                              });
                            }}
                          />
                          <div className="my-8">
                            <button
                              type="button"
                              className="p-2 bg-green-500 uppercase font-bold"
                              onClick={() => {
                                EditUser(
                                  userData.id,
                                  userData.token,
                                  userData.lastName,
                                  userData.firstName,
                                  userData.email,
                                  userData.address,
                                  userData.phone,
                                  userData.password,
                                  userData.currentServices,
                                  userData.company,
                                  userData.roles
                                );
                                window.location.reload();
                              }}
                            >
                              Sauvegarder les modifications
                            </button>
                          </div>
                        </form>
                        <h1 className="yellowbedev-text text-center justify-center text-sm uppercase pb-4">
                          © BE<span className="text-white">-dev</span>
                        </h1>
                      </div>
                    </section>
                  </Popup>
                </div>
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
                  </div>
                  <div class="md:flex-grow">
                    <p class="leading-relaxed">
                      {userData.currentServices ? (
                        userData.currentServices.map((services) => {
                          if (services.locationServer) {
                            return (
                              <div className="grid grid-cols-2 py-2">
                                {services.locationServer.map((server) => {
                                  return (
                                    <div className="pl-2">
                                      {server.usernameServer === "" ? (
                                        <h1>Aucun serveur acheté !</h1>
                                      ) : (
                                        <>
                                          <h1>
                                            Nom d&apos;hôte :{" "}
                                            {server.hostServer}
                                          </h1>
                                          <h1>
                                            Nom d&apos;utilisateur :{" "}
                                            {server.usernameServer}
                                          </h1>
                                          <h1>
                                            Mot de passe :{" "}
                                            {server.passwordServer}
                                          </h1>
                                          <h1>
                                            Port par défaut :{" "}
                                            {server.portServer}
                                          </h1>
                                        </>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                        })
                      ) : (
                        <div className="">
                          <h1>Aucun serveur acheté !</h1>
                        </div>
                      )}
                    </p>
                  </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font yellowbedev-text">
                      Nom de domaine
                    </span>
                  </div>
                  <div class="md:flex-grow">
                    <p>
                      {userData.currentServices ? (
                        userData.currentServices.map((services) => {
                          if (services.locationDomain) {
                            return (
                              <div className="grid grid-cols-2 py-2">
                                {services.locationDomain.map((domain) => {
                                  return (
                                    <div className="pl-2">
                                      {domain.nameDomain === "http://" ? (
                                        <h1>Aucun nom de domaine acheté !</h1>
                                      ) : (
                                        <h1>
                                          Nom de domaine : {domain.nameDomain}
                                        </h1>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                        })
                      ) : (
                        <div className="">
                          <h1>Aucun nom de domaine acheté !</h1>
                        </div>
                      )}
                    </p>
                  </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font yellowbedev-text">
                      Base de données
                    </span>
                  </div>
                  <div class="md:flex-grow">
                    <p class="leading-relaxed">
                      {userData.currentServices ? (
                        userData.currentServices.map((services) => {
                          if (services.locationDatabase) {
                            return (
                              <div className="grid grid-cols-2 py-2">
                                {services.locationDatabase.map((database) => {
                                  return (
                                    <>
                                      {database.usernameDatabase === "" ? (
                                        <h1>Aucune base de données acheté !</h1>
                                      ) : (
                                        <div className="pl-2">
                                          <h1>
                                            Nom d&apos;hôte :{" "}
                                            {database.hostDatabase}
                                          </h1>
                                          <h1>
                                            Nom d&apos;utilisateur :{" "}
                                            {database.usernameDatabase}
                                          </h1>
                                          <h1>
                                            Mot de passe :{" "}
                                            {database.passwordDatabase}
                                          </h1>
                                          <h1>
                                            Port par défaut :{" "}
                                            {database.portDatabase}
                                          </h1>
                                          <h1>
                                            Nom de la base de donnée :{" "}
                                            {database.nameDatabase}
                                          </h1>
                                          <h1>
                                            Stockage :{" "}
                                            {database.stockageDatabase}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  );
                                })}
                              </div>
                            );
                          }
                        })
                      ) : (
                        <div className="">
                          <h1>Aucune base de données acheté !</h1>
                        </div>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-center pb-20">
            <div>
              <button
                className="p-2 bg-red-500 uppercase font-bold"
                onClick={() => {
                  DeleteUser(userData.id, token);
                  window.location.reload();
                }}
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
