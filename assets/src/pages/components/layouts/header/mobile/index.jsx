import React from "react";
import { AiFillHome } from "react-icons/ai";
import "./styles.css";

const NavbarMobile = () => {
  return (
    <nav className="lg:hidden w-screen h-[80px] flex justify-center my-2 fixed bottom-0">
      <div className="w-11/12 h-full  flex justify-around items-center">
        <div className="flex flex-col justify-around items-center btn-nav-hover">
          <AiFillHome className="border border-black/10 shadow-md shadow-yellow-100 w-[60px] h-[60px] rounded-lg bg-yellow-300/60 mb-2" size={35} />
          <p className="hover-text-btn uppercase">Services</p>
        </div>
        <div className="flex flex-col justify-around items-center btn-nav-hover">
          <AiFillHome className="border border-black/10 shadow-md shadow-yellow-100 w-[60px] h-[60px] rounded-lg bg-yellow-300/60 mb-2" size={35} />
          <p className="hover-text-btn uppercase">contacts</p>
        </div>
        <div className="flex flex-col justify-around items-center btn-nav-hover">
          <AiFillHome className="border border-black/10 shadow-md shadow-yellow-100 w-[60px] h-[60px] rounded-lg bg-yellow-300/60 mb-2" size={35} />
          <p className="hover-text-btn uppercase">accueil</p>
        </div>
        <div className="flex flex-col justify-around items-center btn-nav-hover">
          <AiFillHome className="border border-black/10 shadow-md shadow-yellow-100 w-[60px] h-[60px] rounded-lg bg-yellow-300/60 mb-2" size={35} />
          <p className="hover-text-btn uppercase">Connexion</p>
        </div>
        <div className="flex flex-col justify-around items-center btn-nav-hover">
          <AiFillHome className="border border-black/10 shadow-md shadow-yellow-100 w-[60px] h-[60px] rounded-lg bg-yellow-300/60 mb-2" size={35} />
          <p className="hover-text-btn uppercase">profil</p>
        </div>
      </div>
    </nav>
  );
};
export default NavbarMobile;
