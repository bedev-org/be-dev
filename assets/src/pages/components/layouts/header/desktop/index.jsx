import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const NavbarDesktop = () => {

  const [userData, setUserData] = useState(null);
  useEffect(() => {
      axios.get("/serialize-user")
        .then((response) => {
          setUserData(response.data.user);
        })
        .catch((error) => {
          console.error("Erreur récupération des données de l'utilisateur", error);
        });
  }, []);


  return (
    <>
    {userData && (    <pre>{JSON.stringify(userData, null, 2)}</pre>   )}
    <nav className="w-screen h-[70px] max-lg:hidden yellowbedev backdrop-blur-xl rounded-b-lg shadow-md shadow-yellow-300/30">
      <div className="w-full h-full flex justify-around items-center">
        <div>
          <Link className="btn-nav-mobile">Accueil</Link>
        </div>
        <div>
          <Link className="btn-nav-mobile">Services</Link>
        </div>
        <div>
          <Link className="btn-nav-mobile">Contact</Link>
        </div>

        <div>
          <Link className="btn-nav-mobile">(mettre logo)</Link>
        </div>
      
        <div>
          <Link className="btn-nav-mobile">Profil</Link>
        </div>
        <div>
          <Link className="btn-nav-mobile">Connexion</Link>
        </div>
        <div>
          <Link className="btn-nav-mobile">Inscription</Link>
        </div>
      </div>
    </nav>
    </>
  );
};
export default NavbarDesktop;
