// assets/react/MyComponent.jsx
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function (props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useCookies(`access_token`);

  return (
    <>
      <h1 class="yellowbedev-text text-4xl font-bold px-52 pt-10">
        Lo<span class="text-white">gin</span>
      </h1>
      <div class="pt-20">
        <div class="pt-10">
          <input
            for="username"
            type="text"
            name="_username"
            id="username"
            required=""
            class="input rounded border border-gray-700 focus:border-yellow-300    py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Exemple@exemple.fr"
            onChange={(event) =>
              setUserData({ ...userData, username: event.target.value })
            }
          />
        </div>
        <div className="pt-6">
          <input
            type="password"
            name="_password"
            id="password"
            required=""
            class="input rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none py-1 px-3 leading-8 transition-colors "
            placeholder="Mot de passe"
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
          />
        </div>
      </div>
      <div className="pt-10">
        <button
          type="submit"
          id="Log in"
          class="py-2 px-6 text-white yellowbedev focus:outline-none rounded text-lg hover:transition hover:ease-out hover:text-yellow-300 hover:bg-white"
          onClick={() => {
            axios
              .post("/api/login_check", {
                username: userData.username,
                password: userData.password,
              })
              .then((response) => {
                setToken("access_token", response.data.token);
              });
          }}
        >
          Se connecter
        </button>
        <p class="text-white pt-4">
          Pas de compte ?{" "}
          <a href="https://be-dev.org/inscription">S'inscrire !</a>
        </p>
      </div>
    </>
  );
}
