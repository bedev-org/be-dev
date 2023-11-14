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

const Services = () => {
  const [domain, setDomain] = useState({
    name: "",
    extension: "",
  });

  return (
    <>
      <Navbar />
      <body className="blackbedev">
      <section className="text-white body-font overflow-hidden">
  <div
    style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/1296993493/fr/photo/centre-de-donn%C3%A9es-de-la-salle-des-serveurs-sauvegarde-exploitation-mini%C3%A8re-h%C3%A9bergement.jpg?s=2048x2048&w=is&k=20&c=CQLv0ZPJmvqqSwpxtc68g-Jw3wjjC1HM0OZ8GrARvtU=")',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
    }}
    className="flex justify-center items-center border rounded-lg p-5 md:p-16 lg:p-28 h-96"
  >
   <h2 className="sm:text-4xl text-3xl font-medium title-font mt-20 text-black bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-md shadow-lg">
        Nos services
      </h2>
  </div>
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-col text-center w-full ">
      
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400 py-6">
        🚀 Propulsez votre entreprise vers de nouveaux sommets avec notre offre exclusive de location de base de données et de serveurs, accompagnée d'un nom de domaine sur mesure ! <br />
        ✨Boostez votre efficacité opérationnelle : Accédez à des bases de données performantes et des serveurs ultrarapides pour garantir une expérience utilisateur sans faille. <br /><br />
        Découvrez dès maintenant notre offre exclusive de location de base de données et de serveurs, avec un nom de domaine à la clé ! 🔗💻
      </p>
    </div>
  </div>
            <div className="">
              <TitleServices title="Location nom de domaines" />
              <div className="w-full flex flex-col lg:flex-row justify-around items-center  lg:items-start">
                <div className="my-10">
                  <p className="w-[400px] lg:border-r lg:border-white/50 lg:pr-16 h-[600px] leading-6 py-40  ">
                    En optant pour la location de nom de domaine, vous pouvez
                    bénéficier d'une flexibilité accrue. Vous pouvez choisir un
                    nom de domaine pertinent pour une campagne spécifique, un
                    lancement de produit, ou d'entreprise dans les différents
                    choix proposés. Testez l'égibilité !!
                  </p>
                </div>
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
            <div className="">
              <TitleServices title="Location base de données" />
              <div className=" w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b border-white/20 pb-10">
                <div className="my-5">
                  <p className="w-[280px] lg:border-r lg:border-white/50 lg:pr-5 ">
                    La location de bases de données che be-dev vous offrrira un
                    accès rapide et ciblé à des informations cruciales. Que ce
                    soit pour élargir sa clientèle, optimiser ses campagnes
                    marketing ou améliorer sa compréhension du marché, la
                    location de bases de données présente des avantages
                    significatifs pour vous. Alors n'hésistez pas à regarder nos
                    offres !!
                  </p>
                </div>
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
                  option4="IA"
                  onClick={() => AddDb("premium", 30)}
                />
              </div>
            </div>
            <div>
              <TitleServices title="Location serveurs" />
              <div className=" w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b border-white/20 pb-10">
                <div className="my-5">
                  <p className="w-[280px] lg:border-r lg:border-white/50 lg:pr-5">
                  Choisissez la fiabilité et la vitesse pour propulser votre entreprise vers de nouveaux sommets. Nos serveurs de pointe offrent une expérience sans compromis, garantissant une disponibilité constante et des temps de réponse ultrarapides !!
                  </p>
                </div>
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
         
        </section>
      </body>
      <Footer />
    </>
  );
};

export default Services;
