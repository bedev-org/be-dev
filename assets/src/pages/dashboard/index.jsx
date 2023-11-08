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
      .get("/serialize-user")
      .then((response) => {
        setUserData(response.data.user);

        const data = {
          username: JSON.stringify(userData.email.replace("", "")),
          password: JSON.stringify(userData.password.replace("", "")),
        };

        axios.post("/api/login_check", data).then((response) => {
          setToken(response.data.token);
          console.log(response.data.token);
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
                          {JSON.stringify(userData.firstName.replace("", ""))}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-r-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Nom
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.lastName.replace("", ""))}
                        </p>
                      </div>
                      <div class="xl:w-1/5 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-r-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl yellowbedev-text font-medium title-font mb-2">
                          Adresse email
                        </h2>
                        <p class="leading-relaxed text-base mb-4">
                          {JSON.stringify(userData.email.replace("", ""))}
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
                          {JSON.stringify(userData.adress.replace("", ""))}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="whitebedev-text">
                  <Popup
                    trigger={
                      <button className="p-2 bg-green-500 uppercase font-bold">
                        Modifier informations parsonnelles
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
                          In<span className="text-white">scription</span>
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
                                first_name: event.target.value,
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
                                last_name: event.target.value,
                              });
                            }}
                          />
                          {console.log(userData)}
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
                                password: event.target.value,
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
                                  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTk0Mjk5MjMsImV4cCI6MTY5OTQzMzUyMywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlckBiZS1kZXYuZnIifQ.F6CDJu3PEEOB1kbAlKUPYRXRGCgrPy4YhI9muv2MJUk-PyNPuudfEfFP-ebU22lo6W8A1Tvsy0tvjBHzvHXHW0LD8VHAsjsdFn4eJGzq4IyXp_gbU7n8XtiZjs95a-UdKXLNtyZk9YKo4sjOQYKPanRxmFnYDnax8GcpYbw7QnH-luH78FX2GbUcHg0J9S6PusIUEoAwQHFZChoH77RQdHBgtSaf2JnkkwJpLqEHwlfK80ll89MLR52ZGjPRRjVe4r2Qg0T7GMFvQDjdNapfxFjhjKsl0w8BVSsI0XmKwFby67V9QGECLxFkSpehuefHxdSvybx5vySumG-JQsWutQ",
                                  userData.lastName,
                                  userData.firstName,
                                  userData.email,
                                  userData.address,
                                  userData.phone,
                                  userData.password,
                                  userData.currentServices
                                );
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
                    <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                  </div>
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium yellowbedev-text title-font mb-2">
                      Bitters hashtag waistcoat fashion axe chia unicorn
                    </h2>
                    <p class="leading-relaxed">
                      {userData.currentServices.map((services) => {
                        if (services.locationServer) {
                          return (
                            <div className="grid grid-cols-2 py-2">
                              {services.locationServer.map((server) => {
                                return (
                                  <div className="pl-2">
                                    <h1>
                                      Nom d&apos;utilisateur :{" "}
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
                      })}
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
                      {userData.currentServices.map((services) => {
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
                      })}
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
                      {userData.currentServices.map((services) => {
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
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-center">
            <div>
              <button
                className="p-2 bg-red-500 uppercase font-bold"
                onClick={() => DeleteUser(userData.id, token)}
              >
                Supprimer mon compte
              </button>
            </div>
            <div></div>
          </div>
        </>
      )}
      <Footer />
    </section>
  );
};
export default Dashboard;
