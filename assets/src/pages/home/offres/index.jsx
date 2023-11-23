import React from "react";
import { Link } from "react-router-dom";

const Offres = () => {
  return (
    <section className="yellowbedev py-20">
      <div class="flex justify-center  ">
        <div class="flex flex-col max-w-7xl  justify-center items-center ">
          <div class="rounded-lg overflow-hidden w-3/4 bg-black m-4 shadow-lg flex flex-col md:flex-row justify-center ">
            <div class="w-full flex justify-center items-center">
              {" "}
              <img
                src="/images/illustration/bdd.png"
                alt=""
                class=""
              />{" "}
            </div>
            <div class="flex flex-col items-center">
              <div class="pl-4 w-full flex justify-start font-bold text-lg text-white m-2 mt-10">
                Location de base de données :
              </div>
              <p class="pl-4 text-white text-sm pr-6">
                Notre service de location de bases de données simplifie la
                gestion de vos informations cruciales. Nous offrons des
                solutions flexibles, qu'il s'agisse de bases de données SQL pour
                des données structurées ou de bases de données NoSQL pour des
                données non structurées. Avec nous, vous pouvez stocker, gérer
                et accéder à vos données en toute simplicité. Nous vous libérons
                des soucis liés à l'infrastructure, vous permettant de vous
                concentrer sur le développement de votre entreprise sans tracas
                techniques.
              </p>
              <div className="my-8">
                <Link
                  to="/services"
                  class="py-2 px-6 text-white yellowbedev focus:outline-none rounded text-lg hover:transition hover:ease-out hover:text-yellow-300 hover:bg-white"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
          <div class=" rounded-lg overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="flex flex-col items-center ">
              <div class="pl-6 w-full flex justify-start font-bold text-lg text-black m-2 mt-10">
                Location de noms de domaines :{" "}
              </div>
              <div class="text-black pl-4 m-2 text-sm pr-6">
                Trouver le nom de domaine parfait est facile avec notre service
                de location. Nous vous proposons un large éventail d'options,
                adaptées à votre entreprise, que ce soit pour cibler une région
                spécifique ou un public international. Nous simplifions le
                processus d'enregistrement et de gestion, garantissant que votre
                nom de domaine reste actif et sécurisé en permanence. Avec nous,
                établir votre présence en ligne avec une adresse professionnelle
                et mémorable devient un jeu d'enfant.
                <div className="my-8 flex justify-center">
                  <Link
                    to="/services"
                    className=" py-2 px-6 text-white yellowbedev focus:outline-none rounded text-lg hover:transition hover:ease-out hover:text-yellow-300 hover:bg-black"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-center items-center">
              {" "}
              <img
                src="/images/illustration/nomdedomaine.jpg "
                alt=""
                class=""
              />{" "}
            </div>
          </div>
          <div class=" rounded-lg overflow-hidden w-3/4 bg-black m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="w-full flex justify-center items-center">
              {" "}
              <img
                src="/images/illustration/serveur.png "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="grid p-2 pr-4">
              <div class="pl-4 w-full flex justify-start font-bold text-lg text-white m-2 mt-10">
                Location de serveur :{" "}
              </div>
              <div class="text-white pl-4 pr-6 m-2 text-sm">
                Notre service de location de serveurs vous offre des
                performances fiables et une disponibilité constante. Que vous
                ayez besoin d'un serveur cloud adaptable ou d'un serveur dédié
                pour des performances maximales, nous avons la solution idéale.
                Nous nous occupons de l'infrastructure technique, assurant ainsi
                que votre site web ou application fonctionne sans problème.
                Optez pour la simplicité et la tranquillité d'esprit en
                choisissant notre service de location de serveurs pour propulser
                votre présence en ligne vers le succès.
                <div className="my-8 flex justify-center">
                  <Link
                    to="/services"
                    className="py-2 px-6 text-white yellowbedev focus:outline-none rounded text-lg hover:transition hover:ease-out hover:text-yellow-300 hover:bg-white"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offres;
