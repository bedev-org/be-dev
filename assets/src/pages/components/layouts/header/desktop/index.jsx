import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ImUser } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
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


  const LinkConnect = ()=> { 
    return (
      
    <>
    <div className="grid grid-cols-2">

<div className="pr-8 flex items-center">
    <Link to="/panier" className="btn-nav-mobile text-3xl ">
        <MdShoppingCart/>
      </Link>
</div>
    <div className=" pl-8 flex items-center" >
    <Link  to="https://be-dev.org/profil" className="btn-nav-mobile text-3xl"  >
      <ImUser/>
      </Link>
    </div>
    </div>
    </>
  );
};

  const LinkDisconnect =()=>{ 
    return (
    <>
    <div className="flex">
      <a href="https://be-dev.org/login" className="btn-nav-mobile">Connexion</a>
    </div>
    <div className="flex">
      <a href="https://be-dev.org/register" className="btn-nav-mobile">Inscription</a>
    </div>
    </>

  );
};




  return (
    <>
    <nav className="w-screen h-[70px] max-lg:hidden yellowbedev backdrop-blur-xl rounded-b-lg shadow-md shadow-yellow-300/30">
      <div className="w-full h-full flex justify-around items-center">
    <div className="">
      <img src="/images/logos/be-dev.svg" height={150} width={150} alt="be-dev.org" /> 
    </div>
        <div>
          <Link to="https://be-dev.org" className="btn-nav-mobile">Accueil</Link>
        </div>
        <div>
          <Link to="https://be-dev.org/services" className="btn-nav-mobile">Services</Link>
        </div>
        <div>
          <Link to="https://be-dev.org/contact" className="btn-nav-mobile">Contact</Link>
        </div>
        
        {userData===null ? (
          LinkDisconnect()
        ):(
            LinkConnect()
        )} 
       
      </div>
    </nav>
    </>
  );
};
export default NavbarDesktop;
