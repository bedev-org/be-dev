import React from "react";
import "./styles.css";

const NavbarDesktop = () => {
  return (
    <nav className="w-screen h-[70px] max-lg:hidden yellowbedev backdrop-blur-xl rounded-b-lg shadow-md shadow-yellow-300/30">
      <div className="w-full h-full flex justify-around items-center">
        <div>
          <a href="/" className="btn-nav-mobile">Accueil</a>
        </div>
        <div>
          <a href="/services" className="btn-nav-mobile">Services</a>
        </div>
        <div>
          <a href="/contact" className="btn-nav-mobile">Contact</a>
        </div>
        <div>
          <a className="btn-nav-mobile">(mettre logo)</a>
        </div>
        <div>
          <a href="/profil" className="btn-nav-mobile">Profil</a>
        </div>
        <div>
          <a href="/login" className="btn-nav-mobile">Connexion</a>
        </div>
        <div>
          <a href="/register" className="btn-nav-mobile">Inscription</a>
        </div>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
