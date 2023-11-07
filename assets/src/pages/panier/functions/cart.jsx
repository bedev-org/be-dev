import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const cartTotal = JSON.parse(window.localStorage.getItem("cart"));
  const domain = JSON.parse(window.localStorage.getItem("domain"));
  const database = JSON.parse(window.localStorage.getItem("database"));
  const server = JSON.parse(window.localStorage.getItem("server"));

  const config = {
    headers: {
      "Content-Type": "application/ld+json",
      Authorization:
        "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTkzNTA3OTYsImV4cCI6MTY5OTM1NDM5Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdDEyM0B0ZXN0LmZyciJ9.5b7xpMD2_mNptwjFt07JUa8-GSN4Qt2LzOyEzdtb6QvqQR0-Xy9es8t6juuLD6ZlSNN3OUpwQeWYjycHtcniZPxNnPB6urDNODCWAzptqrULAx_0CJCJYKhWjVMLBBgU5bKln0ncB4LQssojp7Ovw8TeEES81gNinNT8Kwvfv4QvliIuOwmUD_HXoFmdpVpOeAcXU3XAphqPZKgs2ZcsalR0UxPzmM4GJkGLNI0pR02GJt7FLUr5uQoVXwKyNSEv3aX7uiY_LMTFiK7GwpROwSZsX7uWToiG4ytmtyidrs7Iu9zatURTGcA2QZHPpCIKNwr8lpDL9lyDBUQS4F4_oQ",
    },
  };

  const [lists, setLists] = useState({
    databases: [],
    servers: [],
  });

  const [listDatabase, setListDatabase] = useState({
    usernameDatabase: "",
    passwordDatabase: "",
    hostDatabase: "",
    portDatabase: "",
    nameDatabase: "",
    stockageDatabase: "",
  });

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get("/serialize-user").then((response) => {
      setUserData(response.data.user);
    });

    axios.get("/api/location_servers", config).then((response) => {
      setLists({ servers: response.data["hydra:member"] });
    });

    axios.get("/api/location_databases", config).then((response) => {
      setLists({ databases: response.data["hydra:member"] });
      console.log(lists.databases);
    });
  }, []);

  const HandleSubmit = () => {
    if (!userData) {
      alert("Veuillez vous connecter pour poursuivre vos achats.");
    } else {
      if (domain) {
        const dataDomain = {
          nameDomain: domain.name,
        };

        axios.post("/api/location_domains", dataDomain, config).then(() => {
          alert("success");
        });

        const data = {
          email: "test123@test.fr",
          password:
            "$2y$13$Qpj59JYcY4mSZXQlRlNAcur4LN5XWTUbIllW5.qW8pKNlK5f6vIXO",
          adress: "string",
          phone: 0,
          lastName: "string",
          firstName: "string",
          currentServices: [
            {
              locationDomain: [
                {
                  nameDomain: domain.name,
                },
              ],
            },
          ],
        };

        axios
          .put(`/api/users/${userData.id}`, data, config)
          .then(() => alert("success domain"));
      }

      if (server) {
        // console.log(lists)
        // const data = {
        //   email: "test123@test123.frr",
        //   password:
        //     "$2y$13$Qpj59JYcY4mSZXQlRlNAcur4LN5XWTUbIllW5.qW8pKNlK5f6vIXO",
        //   adress: "string",
        //   phone: 0,
        //   lastName: "string",
        //   firstName: "string",
        //   currentServices: [
        //     {
        //       locationServer: [
        //         {
        //           usernameServer: "root",
        //           passwordServer: "azerty",
        //           hostServer: "87.106.25.93",
        //           portServer: 22,
        //         },
        //         {
        //           usernameServer: "root",
        //           passwordServer: "wxcvbn",
        //           hostServer: "89.101.15.23",
        //           portServer: 22,
        //         },
        //       ],
        //     },
        //   ],
        // };
        // axios
        //   .put(`/api/users/${userData.id}`, data, config)
        //   .then(() => alert("success server"));
      }

      if (database) {
        const data = {
          email: "test123@test.frr",
          password:
            "$2y$13$Qpj59JYcY4mSZXQlRlNAcur4LN5XWTUbIllW5.qW8pKNlK5f6vIXO",
          adress: "string",
          phone: 0,
          lastName: "string",
          firstName: "string",
          currentServices: [
            {
              locationDatabase: listDatabase,
            },
          ],
        };

        lists.databases.map((database) => {
          return setListDatabase({
            usernameDatabase: database.usernameDatabase,
            passwordDatabase: database.passwordDatabase,
            hostDatabase: database.hostDatabase,
            portDatabase: database.portDatabase,
            nameDatabase: database.nameDatabase,
            stockageDatabase: database.stockageDatabase,
          });
        });

        console.log(listDatabase);


        axios
          .put(`/api/users/${userData.id}`, data, config)
          .then(() => alert("success database"));
      }
    }
  };

  return (
    <>
      {domain || server || database ? (
        <>
          <div className="grid-grid-rows-1">
            {domain ? (
              <div>
                Location de domaine :
                <br />
                URL : {domain.name} Prix : {domain.price}€
              </div>
            ) : null}
            {server ? (
              <div className="my-4">
                Location de serveur :
                <br />
                Type : {server.name} Prix : {server.price}€
              </div>
            ) : null}
            {database ? (
              <div>
                Location de db :
                <br />
                Type : {database.name} Prix : {database.price}€
              </div>
            ) : null}
          </div>
          {cartTotal ? (
            <div className="my-4">Total : {cartTotal.total}€</div>
          ) : null}

          <button
            type="button"
            className="p-4 bg-orange-300 uppercase font-bold text-black"
            onClick={() => HandleSubmit()}
          >
            Valider panier
          </button>
        </>
      ) : (
        <>
          <h1>Aucun produits sélectionné !</h1>
        </>
      )}
    </>
  );
};

export default Cart;
