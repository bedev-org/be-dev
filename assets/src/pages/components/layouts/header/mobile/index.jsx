import React from "react";
import { AiFillHome } from "react-icons/ai";
import "./styles.css";

const NavbarMobile = () => {
  return (
    <nav className="lg:hidden w-screen h-[80px] flex justify-center my-2 fixed bottom-0 z-50">
      <div className="w-11/12 h-full  flex justify-around items-center">
        <div className="btn-nav-hover">
          <a
            className="flex flex-col justify-around items-center"
            href="/services"
          >
            <AiFillHome
              className=" w-[40px] h-[40px] rounded-lg yellow-glass mb-2"
              size={30}
            />
            <p className="hover-text-btn uppercase text-white">Services</p>
          </a>
        </div>
        <div className="btn-nav-hover">
          <a
            className="flex flex-col justify-around items-center"
            href="/contact"
          >
            <AiFillHome
              className=" w-[40px] h-[40px] rounded-lg yellow-glass mb-2"
              size={30}
            />
            <p className="hover-text-btn uppercase text-white">contacts</p>
          </a>
        </div>
        <div className="btn-nav-hover">
          <a className="flex flex-col justify-around items-center" href="/">
            <AiFillHome
              className=" w-[40px] h-[40px] rounded-lg yellow-glass mb-2"
              size={30}
            />
            <p className="hover-text-btn uppercase text-white">accueil</p>
          </a>
        </div>
        <div className="btn-nav-hover">
          <a className="flex flex-col justify-around items-center" href="">
            <AiFillHome
              className=" w-[40px] h-[40px] rounded-lg yellow-glass mb-2"
              size={30}
            />
            <p className="hover-text-btn uppercase text-white">Connexion</p>
          </a>
        </div>
        <div className="flex flex-col justify-around items-center btn-nav-hover">
          <AiFillHome
            className=" w-[40px] h-[40px] rounded-lg yellow-glass mb-2"
            size={30}
          />
          <p className="hover-text-btn uppercase text-white">profil</p>
        </div>
        <div className="flex flex-col justify-around items-center btn-nav-hover">
          <AiFillHome
            className=" w-[40px] h-[40px] rounded-lg yellow-glass mb-2"
            size={30}
          />
          <p className="hover-text-btn uppercase text-white">profil</p>
        </div>
        <div className="flex flex-col justify-around items-center btn-nav-hover">
          <AiFillHome
            className=" w-[40px] h-[40px] rounded-lg yellow-glass mb-2"
            size={30}
          />
          <p className="hover-text-btn uppercase text-white">profil</p>
        </div>
      </div>
    </nav>
  );
};
export default NavbarMobile;
