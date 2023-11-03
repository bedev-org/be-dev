import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NavbarDesktop = () => {
  return (
<<<<<<< HEAD
    <nav className="w-screen h-[70px] max-lg:hidden bg-yellow-300/50 backdrop-blur-xl rounded-b-lg shadow-md shadow-yellow-300/30">
      <div className="w-full h-full flex justify-around items-center hover:bg-yellow-300">
=======
    <nav className="w-screen h-[70px] max-lg:hidden yellowbedev backdrop-blur-xl rounded-b-lg shadow-md shadow-yellow-300/30">
      <div className="w-full h-full flex justify-around items-center">
>>>>>>> 60b61db37f10034e8f19156e424df5097c03d2ff
        <div>
          <Link className="btn-nav-mobile"> <a href="/"></a>Accueil</Link>
        </div>
        <div>
          <Link className="btn-nav-mobile">Services</Link>
        </div>
        <div>
          <Link className="btn-nav-mobile">Contact</Link>
        </div>

        <div>
          <Link  className="btn-nav-mobile">(mettre logo)</Link> 
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
  );
};
export default NavbarDesktop;
