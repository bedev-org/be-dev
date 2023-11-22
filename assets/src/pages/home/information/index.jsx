import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <section class="blackbedev ">
      <div class="flex justify-center items-center glasswhite">
        <div class="flex flex-col justify-center items-center max-w-7xl ">
          <h1 class="text-3xl md:text-[50px] text-gray-700 font-bold mt-10 ">
            Information
          </h1>
          <div class="flex flex-col justify-center items-center xl:flex-row m-8 w-[80%] lg:w-full">
            <div class="flex flex-col items-center justify-center m-6 px-6 lg:w-1/3 w-full ">
              <h1 class="text-gray-700 text-2xl font-bold">Services</h1>
              <div class="flex items-center justify-center flex-col space-y-2 mt-5 ">
                <div class="flex items-center justify-center space-x-4">
                 
                  <h1 class="text-lg font-semibold mt-3">
                    Expertise Polyvalente:{" "}
                  </h1>
                </div>
                <h1 class="text-justify text-gray-700 md:w-[250px]">
                  En tant qu'experts en hébergement de bases de données,
                  enregistrement de noms de domaines et serveurs, nous sommes
                  votre guichet unique pour tous vos besoins numériques.
                </h1>
              </div>
              <div class="flex items-center justify-center flex-col space-y-2 mt-5">
                <div class="flex items-center justify-center space-x-4">
                 
                  <h1 class="text-lg font-semibold mt-2">
                    Personnalisation Avancée :
                  </h1>
                </div>
                <h1 class="text-justify text-gray-700 md:w-[250px]">
                  Chaque solution que nous proposons est taillée sur mesure pour
                  répondre à vos exigences précises, garantissant une expérience
                  en ligne unique et mémorable pour vos visiteurs.
                </h1>
              </div>
              <div class="flex items-center justify-center flex-col space-y-2 mt-3">
                <div class="flex items-center justify-center space-x-4">
                  
                  <h1 class="text-lg font-semibold mt-5">
                    Fiabilité Inébranlable :{" "}
                  </h1>
                </div>
                <h1 class="text-justify text-gray-700 md:w-[250px]">
                  Vos données et votre présence en ligne sont entre de bonnes
                  mains. Nous garantissons une sécurité de niveau supérieur et
                  une disponibilité constante pour votre tranquillité d'esprit.
                </h1>
              </div>
            </div>
            <div class="w-60 h-60 lg:w-96  lg:h-120 overflow-hidden  ">
              <img
                src="/images/illustration/informaticien.jpg "
                alt="informaticien"
                class="h-full w-full"
              />{" "}
            </div>
            <div class="flex flex-col m-6 px-6 xl:w-1/3 w-full items-center justify-center">
              <div class="flex items-center justify-center">
                
                <div class="flex flex-col">
                  <h1 class="text-lg font-semibold mt-3 text-center">
                    Service Client d'Excellence
                  </h1>
                </div>
              </div>
              <div class="flex flex-col mt-3">
                <p class="text-justify text-gray-700 md:w-[250px]">
                  Votre satisfaction est notre priorité absolue. Notre équipe de
                  support client dévouée est disponible 24/7 pour répondre à vos
                  questions et résoudre vos problèmes, garantissant une
                  expérience sans accroc à chaque étape.
                </p>
                <Link to="/services">
                <button class="mt-5 px-6 py-1 text-lg text-white hover:bg-gray-800 bg-gray-700">
                  Nos services
                </button>
                </Link>
              </div>

              <div class="flex space-x-6 mt-5">
                <div class="flex flex-col ">
                  <div class="flex space-x-1">
                    <h1 class="text-2xl font-semibold mt-3">5</h1>
                    <h1 class="text-xl mt-[14px] font-semibold ">Years</h1>
                  </div>
                  <h1 class=" text-gray-700 ">Experience</h1>
                </div>
                <div class="flex flex-col ">
                  <div class="flex space-x-1">
                    <h1 class="text-2xl font-semibold mt-3">50</h1>
                    <h1 class="text-xl font-bold mt-3">+</h1>
                  </div>
                  <h1 class=" text-gray-700 ">Clients</h1>
                </div>
                <div class="flex flex-col ">
                  <div class="flex space-x-1">
                    <h1 class="text-2xl font-semibold mt-3">95</h1>
                    <h1 class="text-lg font-bold mt-3">%</h1>
                  </div>
                  <h1 class=" text-gray-700 ">Satisfaction</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </section>
  );
};

export default Information;
