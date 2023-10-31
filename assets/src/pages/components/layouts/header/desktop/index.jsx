import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const NavbarDesktop = () => {
  return (
    <nav className="w-screen h-[70px] max-lg:hidden bg-yellow-300/40 backdrop-blur-xl rounded-b-lg shadow-md shadow-yellow-300/30">
      <div className="w-full h-full flex justify-around items-center">
        <div><Link className="btn-nav-mobile">Accueil</Link></div>
        <div><Link className="btn-nav-mobile">Contact</Link></div>
        <div><Link className="btn-nav-mobile">Connexion</Link></div>
        <div><Link className="btn-nav-mobile">Inscription</Link></div>
        <div><Link className="btn-nav-mobile">BeDev</Link></div>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
