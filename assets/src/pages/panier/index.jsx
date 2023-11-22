import React, { useEffect, useState } from "react";
import Navbar from "../components/layouts/header";
import Footer from "../../components/layouts/footer";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { Token } from "../../middleware/token";

const Panier = () => {
  const domain = JSON.parse(localStorage.getItem("domain") || "[]");
  const server = JSON.parse(localStorage.getItem("server") || "[]");
  const database = JSON.parse(localStorage.getItem("database") || "[]");
  const [userData, setUserData] = useState(null);
  const cart = [domain, server, database];

  const token = Token.get("access_token");

  const [newDomain, setNewDomain] = useState({
    locationDomain: [
      {
        nameDomain: domain.name,
      },
    ],
  });
  const [newServer, setNewServer] = useState({
    locationServer: [
      {
        usernameServer: "",
        passwordServer: "",
        hostServer: "",
        portServer: "",
      },
    ],
  });

  const [newDatabase, setNewDatabase] = useState({
    locationDatabase: [
      {
        usernameDatabase: "",
        passwordDatabase: "",
        hostDatabase: "",
        portDatabase: "",
        nameDatabase: "",
        stockageDatabase: "",
      },
    ],
  });

  useEffect(() => {
    axios
      .get("/serialize-user")
      .then((response) => setUserData(response.data.user));

    axios.get("/api/location_servers/8").then((response) => {
      setNewServer({
        locationServer: [
          {
            usernameServer: response.data.usernameServer,
            passwordServer: response.data.passwordServer,
            hostServer: response.data.hostServer,
            portServer: response.data.portServer,
          },
        ],
      });
    });

    axios.get("/api/location_databases/8").then((response) => {
      setNewDatabase({
        locationDatabase: [
          {
            usernameDatabase: response.data.usernameDatabase,
            passwordDatabase: response.data.passwordDatabase,
            hostDatabase: response.data.hostDatabase,
            portDatabase: response.data.portDatabase,
            nameDatabase: response.data.nameDatabase,
            stockageDatabase: response.data.stockageDatabase,
          },
        ],
      });
    });

    const totalCart =
      (domain.price ?? +0) + (server.price ?? +0) + (database.price ?? +0);

    window.localStorage.setItem("cart", JSON.stringify({ total: totalCart }));
  }, []);

  return (
    <section>
      <Navbar />
      <div className="pt-20 blackbedev grid grid-rows-1 justfy-items-center">
        <div className="bg-black rounded-xl mx-28 lg:mx-60 mt-10">
          <div className="border-b border-white">
            <h1 className="text-orange-600 text-4xl p-4">Votre panier</h1>
          </div>

          {domain.name ? (
            <>
              <div className="text-white border-b border-white grid grid-cols-2 ">
                <div className="flex align-middle">
                  <div className="flex justify-center items-center pl-4">
                    <img
                      src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className=" ml-4 flex align-middle">
                    <div>
                      <h1 className="lg:text-2xl uppercase yellowbedev2-text pt-2">
                        Nom de domaine
                      </h1>
                      <div className=" py-2">
                        <p>Url : {domain.name}</p>
                      </div>
                      <div className="pb-2">
                        <p>Prix : {domain.price}€</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end text-lg my-4 mr-8">
                  <button
                    type="button"
                    onClick={() => {
                      window.localStorage.removeItem("domain");
                      window.location.reload();
                    }}
                  >
                    <RiDeleteBinFill />
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {server.name ? (
            <>
              <div className="text-white border-b border-white grid grid-cols-2 ">
                <div className="flex align-middle">
                  <div className="flex justify-center items-center pl-4">
                    <img
                      src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className=" ml-4 flex align-middle">
                    <div>
                      <h1 className="lg:text-2xl uppercase yellowbedev2-text pt-2">
                        Serveur
                      </h1>
                      <div className=" py-2">
                        <p>Type de serveur : {server.name}</p>
                      </div>
                      <div className="pb-2">
                        <p>Prix : {server.price}€</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end text-lg my-4 mr-8">
                  <button
                    type="button"
                    onClick={() => {
                      window.localStorage.removeItem("server");
                      window.location.reload();
                    }}
                  >
                    <RiDeleteBinFill />
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {database.name ? (
            <>
              <div className="text-white border-b border-white grid grid-cols-2 ">
                <div className="flex align-middle">
                  <div className="flex justify-center items-center pl-4">
                    <img
                      src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className=" ml-4 flex align-middle">
                    <div>
                      <h1 className="lg:text-2xl uppercase yellowbedev2-text pt-2">
                        Base de données
                      </h1>
                      <div className=" py-2">
                        <p>Type de BDD : {database.name}</p>
                      </div>
                      <div className="pb-2">
                        <p>Prix : {database.price}€</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end text-lg my-4 mr-8">
                  <button
                    type="button"
                    onClick={() => {
                      window.localStorage.removeItem("database");
                      window.location.reload();
                    }}
                  >
                    <RiDeleteBinFill />
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {domain.name || server.name || database.name ? (
            <>
              <div className="border-t border-white grid grid-rows-2 p-4">
                <div className="flex align-items text-4xl lg:text-2xl">
                  <h1 className="text-white ">
                    Total :{" "}
                    {(domain.price ?? +0) +
                      (server.price ?? +0) +
                      (database.price ?? +0)}
                  </h1>
                  <p className="text-white ml-1"> €</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="uppercase text-xl text-white p-4">
                Aucun produit sélectionné
              </h1>
            </>
          )}
        </div>
        {domain.name || server.name || database.name ? (
          <>
            <div className="flex flex-row justify-end py-20 mx-30 lg:mx-60">
              <button
                type="button"
                className="bg-red-500 mr-8 hover:transition hover:ease-out hover:bg-black hover:text-yellow-300 w-40 h-10 text-xl"
                onClick={() => {
                  window.localStorage.removeItem("domain");
                  window.localStorage.removeItem("server");
                  window.localStorage.removeItem("database");
                  window.location.reload();
                }}
              >
                Vider le panier
              </button>
              <button
                type="button"
                className="yellowbedev2 hover:transition hover:ease-out hover:bg-black hover:text-yellow-300 w-40 h-10 text-xl"
                onClick={() => {
                  if (userData === null) {
                    alert("Veuillez vous connecter pour poursuivre.");
                  } else {
                    const dataCart = {
                      basket: cart,
                      createdAt: new Date(),
                      userName: "test",
                    };

                    const result = [newDomain, newDatabase, newServer];

                    const dataUser = {
                      // email: userData.email,
                      // roles: userData.roles,
                      // password: userData.password,
                      // address: userData.address,
                      // phone: userData.phone,
                      // company: userData.company,
                      // lastName: userData.lastName,
                      // firstName: userData.firstName,
                      currentServices: result,
                    };

                    const config = {
                      headers: {
                        Authorization: `bearer ${token}`,
                        "Content-Type": "application/ld+json",
                      },
                    };

                    const configUser = {
                      headers: {
                        Authorization: `bearer ${token}`,
                        "Content-Type": "application/merge-patch+json",
                      },
                    };

                    axios
                      .patch(`/api/users/${userData.id}`, dataUser, configUser)
                      .then(() => {
                        axios.post("/api/carts", dataCart, config).then(() => {
                          alert("Commande validé");
                          window.localStorage.removeItem("domain");
                          window.localStorage.removeItem("server");
                          window.localStorage.removeItem("database");
                          window.location.reload();
                        });
                      });
                  }
                }}
              >
                Valider
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid justify-items-end py-20 mx-30 lg:mx-60">
              <Link
                to={"/services"}
                className="yellowbedev2 p-2 hover:transition hover:ease-out hover:bg-black hover:text-yellow-300 text-xl"
              >
                Retour boutique
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Panier;
