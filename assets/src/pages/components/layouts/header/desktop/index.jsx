import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ImUser, ImExit } from "react-icons/im";

import { MdShoppingCart } from "react-icons/md";
import "./styles.css";
import { Token } from "../../../../../middleware/token";

const NavbarDesktop = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    axios
      .get("/serialize-user")
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error(
          "Erreur récupération des données de l'utilisateur",
          error
        );
      });
  }, []);

  return (
    <>
      <nav className="w-screen h-[70px] max-lg:hidden yellowbedev backdrop-blur-xl rounded-b-lg shadow-md shadow-yellow-300/30 py-10">
        <div className="w-full h-full flex justify-around items-center">
          <a href="https://be-dev.org" className="">
            <img
              src="/images/logos/be-dev.svg"
              height={150}
              width={150}
              alt="be-dev.org"
            />
          </a>
          <div>
            <Link to="https://be-dev.org" className="text-black uppercase font-bold hover:transition hover:ease-out hover:text-yellow-300 hover:underline hover:bg-black p-4">
              Accueil
            </Link>
          </div>
          <div>
            <Link to="https://be-dev.org/services"  className="text-black uppercase font-bold hover:transition hover:ease-out hover:text-yellow-300 hover:underline hover:bg-black p-4">
              Services
            </Link>
          </div>
          <div>
            <Link to="https://be-dev.org/contact"  className="text-black uppercase font-bold hover:transition hover:ease-out hover:text-yellow-300 hover:underline hover:bg-black p-4">
              Contact
            </Link>
          </div>
          <div className="flex">
            <div className="pr-4 flex justify-center items-center">
              <Link
                to="https://be-dev.org/panier"
                className="text-black text-3xl hover:text-white hover:transition hover:ease-out"
              >
                <MdShoppingCart />
              </Link>
            </div>

            {userData === null ? (
              <div className="pl-4 flex justify-center items-center">
                <a
                  href="https://be-dev.org/connexion"
                  className="text-black text-3xl hover:text-white hover:transition hover:ease-out"
                >
                  {" "}
                  <ImUser />
                </a>
              </div>
            ) : (
              <>
                <div className=" px-4 flex justify-center items-center">
                  <Link
                    to="https://be-dev.org/profil"
                    className="text-black text-3xl hover:text-white hover:transition hover:ease-out"
                  >
                    {" "}
                    <ImUser />{" "}
                  </Link>
                </div>
                <div className="pt-1 pl-5 flex justify-center items-center">
                  <a
                    href="https://be-dev.org/logout"
                    className="text-black text-3xl hover:text-white hover:transition hover:ease-out"
                    onClick={() => {
                      Token.remove("access_token");
                    }}
                  >
                    <ImExit size={'25px'} />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarDesktop;
