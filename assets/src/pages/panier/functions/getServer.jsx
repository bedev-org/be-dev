import React, { useState } from "react";
import axios from "axios";

const GetServer = () => {

  const config = {
    headers: {
      Authorization:
        "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTkyODI5NDgsImV4cCI6MTY5OTI4NjU0OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlckBiZS1kZXYub3JnIn0.cfdHjUrRrbsF_UEJHv_4FbC__EKSniAJExsEFHuzppqoRiJ5FMs2SwHbR-yFtNgGTR3avaUM0atHLVXSBfinj4s5HEV9oaOqqB19CBLpFppVttf6YYPGDMD4bHNd105WMQlKDrqV1uleaizsc-minFAYBqg90NpqPy1C9df1_fR83sbfc8GesLmhn5b0lK3W3iJlqWLsN3J-34-yt82jINBPtMBlodJHDpBtEGn3atbeltgGAMYOiwGmgLErQMzVG7uf5qGAk0dktFnl-2e1jnqZF4pm3Gw8nlQ7BBuSfZJ71G0cpHWZuEI1e3SJWISWXVj0oKLbAwZE9dgYUr7W2g",
    },
  };

  const data = {
    email: "florian@test.fr",
    password: "$2y$13$HaIoCEjNlodcnzAzLhN8q.BBf/6hg4EYd3n2JJRkio0CkYU6uWdHy",
    adress: "string",
    phone: 0,
    lastName: "string",
    firstName: "string",
    currentServices: [
      {
        locationServer: [
          {
            usernameServer: "root",
            passwordServer: "azerty",
            hostServer: "87.106.25.93",
            portServer: 22,
          },
          {
            usernameServer: "root",
            passwordServer: "wxcvbn",
            hostServer: "89.101.15.23",
            portServer: 22,
          },
        ],
      },
    ],
  };

  axios.get("/api/location_servers", config).then((response) => {
    console.log(response.data["hydra:member"]);
  });

  // axios.put("/api/users/10", data, config).then(() => {
  //   alert("success user");
  // });
};

export default GetServer;
