// assets/react/MyComponent.jsx
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function (props) {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const [token, setToken] = useCookies(`access_token`);

  return (
    <>
      <h1 class="yellowbedev-text text-4xl font-bold px-52 pt-10">
        Lo<span class="text-white">gin</span>
      </h1>
      <div class="p-20">
        <div class="">
          <input
            for="username"
            type="text"
            name="_username"
            id="username"
            required=""
            class="input rounded border border-gray-700 focus:border-yellow-300    py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Exemple@exemple.fr"
            onChange={(event) => setUserData({...userData, username: event.target.value})}
          />
        </div>
        <div>
          <input
            type="password"
            name="_password"
            id="password"
            required=""
            class="input rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none py-1 px-3 leading-8 transition-colors "
            placeholder="Mot de passe"
            onChange={(event) => setUserData({...userData, password: event.target.value})}
          />
        </div>
      </div>

      <input
        type="submit"
        id="Log in"
        class="input submit text-white py-2 px-6 focus:outline-none  hover:bg-yellow-300 rounded text-lg border-[1px]"
        onClick={() => {
          axios.post("/api/login_check", {
            username: userData.username,
            password: userData.password
          }).then((response) => {
            setToken('access_token', response.data.token);
          });
        }}
      />
      <div>
        <a href="http://localhost:8000/register">
          <button
            class="mt-20 input submit text-white py-2 px-6 focus:outline-none  hover:bg-yellow-300 rounded text-lg border-[1px]"
            type="submit"
          >
            S'inscrire
          </button>
        </a>
      </div>
      <h1 class="yellowbedev-text text-center justify-center text-sm uppercase pb-4">
        © BE<span class="text-white">-dev</span>
      </h1>
    </>
  );
}
