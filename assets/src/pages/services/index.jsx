import React, { useEffect, useState } from "react";
import PriceCard from "../components/layouts/priceCard/chooseCard";
import FavoriteCard from "../components/layouts/priceCard/favoriteCard";
import UltimateCard from "../components/layouts/priceCard/ultimateCard";
import TitleServices from "../components/layouts/title/titleServices";
import Navbar from "../components/layouts/header/index";
import Footer from "../../components/layouts/footer/index";
import AddDb from "./functions/addDb";
import AddServer from "./functions/addServer";
import AddDomain from "./functions/addDomain";
import { Link } from "react-router-dom";

const Services = () => {
  const [domain, setDomain] = useState({
    name: "",
    extension: "",
  });

  return (
    <>
      <Navbar />
      <body className="blackbedev">
        <section className="text-white body-font pb-40 overflow-hidden">
          <div
            style={{
              backgroundImage:
                ' url("https://lafibre.info/images/datacenter/201305_datacenter_google_LNR_003.jpg")',
            }}
            class="flex justify-center border rounded-lg p-5 md:p-20 lg:p-44 backgroundImageClass"
          >
            <div className="flex flex-col text-center justify-center items-center max-w-7xl whitebedev-text font-bold ">
            <div className="flex flex-col whitebedev-text mt-5">
              <div className=" text-2xl lg:text-3xl font-medium title-font  mx-96 text-black bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-md shadow-lg">
                <h2>Nos services</h2>
                
                <p className="text-xl mt-2 md:mt-4 inline-block px-2 ">
                Noms de domaine - Bases de données - Serveurs
              </p>
              </div>
                </div>
           
              
              

              <p className="mt-20 text-sm md:w-[52%] tracking-wide leading-7 blackbedev rounded-md g:text-xl y p-6">
                🚀 Propulsez votre entreprise vers de nouveaux sommets avec
                notre offre exclusive de location de base de données et de
                serveurs, accompagnée d'un nom de domaine sur mesure ! <br /><br />
                ✨Boostez votre efficacité opérationnelle : Accédez à des bases
                de données performantes et des serveurs ultrarapides pour
                garantir une expérience utilisateur sans faille. <br />
                <br />
                Découvrez dès maintenant notre offre exclusive de location de
                base de données et de serveurs, avec un nom de domaine à la clé
                ! 🔗💻
              </p>
            </div>
          </div>

          <div className="">
            <TitleServices title="Location nom de domaines" />
            <div className="w-full  flex-row justify-center ">
              <div className="py-10">
                <p className=" lg:border-b-2   pb-4 lg:border-white/50 mx-20 text-xl ">
                  En optant pour la location de nom de domaine, vous pouvez
                  bénéficier d'une flexibilité accrue. Vous pouvez choisir un
                  nom de domaine pertinent pour une campagne spécifique, un
                  lancement de produit, ou d'entreprise dans les différents
                  choix proposés. Testez l'égibilité !!
                </p>
              </div>
              <div className="pt-10">
                <PriceCard
                  pack="Nom de domaine"
                  price="10€"
                  delay="/An"
                  option1="option numéro 1"
                  option2="option numéro 2"
                  option3="option numéro 3"
                  option4="option numéro 4"
                  onClick={() =>
                    AddDomain(`http://${domain.name}${domain.extension}`, 10)
                  }
                  text={(event) =>
                    setDomain({ ...domain, name: event.target.value })
                  }
                  radio={(event) =>
                    setDomain({ ...domain, extension: event.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="">
            <TitleServices title="Location base de données" />
            <div className=" w-full  flex-row justify-center">
              <div className="my-5">
                <p className="lg:border-b-2   pb-4 lg:border-white/50 mx-20 text-xl py-6">
                  La location de bases de données che be-dev vous offrrira un
                  accès rapide et ciblé à des informations cruciales. Que ce
                  soit pour élargir sa clientèle, optimiser ses campagnes
                  marketing ou améliorer sa compréhension du marché, la location
                  de bases de données présente des avantages significatifs pour
                  vous. Alors n'hésistez pas à regarder nos offres !!
                </p>
              </div>
              <div className="w-full grid gap-4 lg:grid-cols-3 pt-10">
                <UltimateCard
                  pack="Pack standard"
                  price="10€"
                  delay="/Mois"
                  option1="SQL"
                  option2="20 entités"
                  option3="Données mises à jour régulièrement"
                  onClick={() => AddDb("standard", 10)}
                />
                <FavoriteCard
                  pack="Pack medium"
                  price="20€"
                  delay="/Mois"
                  option1="SQL"
                  option2="50 entités"
                  option3=" Informations démographiques détaillées, historiques d'achats "
                  onClick={() => AddDb("medium", 20)}
                />
                <UltimateCard
                  pack="Pack premium"
                  price="30€"
                  delay="/Mois"
                  option1="SQL"
                  option2="200 entités"
                  option3="Analyse des comportements futurs"
                  onClick={() => AddDb("premium", 30)}
                />
              </div>
            </div>
          </div>
          <div>
            <TitleServices title="Location serveurs" />
            <div className="w-full  flex-row justify-center">
              <div className="my-5">
                <p className="lg:border-b-2   pb-4 lg:border-white/50 mx-20 text-xl py-6">
                  Choisissez la fiabilité et la vitesse pour propulser votre
                  entreprise vers de nouveaux sommets. Nos serveurs de pointe
                  offrent une expérience sans compromis, garantissant une
                  disponibilité constante et des temps de réponse ultrarapides
                  !!
                </p>
              </div>
              <div className="w-full grid gap-4 lg:grid-cols-3 pt-10">
                <UltimateCard
                  pack="Pack standard"
                  price="5€"
                  delay="/Mois"
                  option1="1 Core"
                  option2="1 Go RAM"
                  option3="40 Go SSD"
                  onClick={() => AddServer("standard", 5)}
                />
                <FavoriteCard
                  pack="Pack medium"
                  price="10€"
                  delay="/Mois"
                  option1="2 Cores"
                  option2="4 Go RAM"
                  option3="80 Go SSD"
                  onClick={() => AddServer("medium", 10)}
                />
                <UltimateCard
                  pack="Pack premium"
                  price="15€"
                  delay="/Mois"
                  option1="4 Cores"
                  option2="8 Go RAM"
                  option3="120 Go SSD"
                  onClick={() => AddServer("premium", 15)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-12">
            <Link
              to={"/panier"}
              className="yellowbedev2 p-2 hover:transition hover:ease-out hover:bg-black hover:text-yellow-300 text-xl text-black"
            >
              Voir panier
            </Link>
          </div>
        </section>
      </body>
      <Footer />
    </>
  );
};

export default Services;
