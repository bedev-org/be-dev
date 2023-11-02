import React from "react";

const Offres = () => {
  return (
    <section className="black blackbedev">
      <div class="flex justify-center  glassblckk">
        <div class="flex flex-col max-w-7xl  justify-center items-center">
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNvbGxhYm9yYXRpb24lMjBkZXZ8ZW58MHx8MHx8fDA%3D"
                alt=""
                class=""
              />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
                Location de Database:{" "}
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  Notre service de location de bases de données simplifie la
                  gestion de vos informations cruciales. Nous offrons des
                  solutions flexibles, qu'il s'agisse de bases de données SQL
                  pour des données structurées ou de bases de données NoSQL pour
                  des données non structurées. Avec nous, vous pouvez stocker,
                  gérer et accéder à vos données en toute simplicité. Nous vous
                  libérons des soucis liés à l'infrastructure, vous permettant
                  de vous concentrer sur le développement de votre entreprise
                  sans tracas techniques.
                </a>
                <button class="flex mx-auto mt-16 text-white yellowbedev border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
                Location de Noms de Domaines:{" "}
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  Trouver le nom de domaine parfait est facile avec notre
                  service de location. Nous vous proposons un large éventail
                  d'options, adaptées à votre entreprise, que ce soit pour
                  cibler une région spécifique ou un public international. Nous
                  simplifions le processus d'enregistrement et de gestion,
                  garantissant que votre nom de domaine reste actif et sécurisé
                  en permanence. Avec nous, établir votre présence en ligne avec
                  une adresse professionnelle et mémorable devient un jeu
                  d'enfant.
                </a>
                <button class="flex mx-auto mt-16 text-white yellowbedev border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  En savoir plus
                </button>
              </div>
            </div>
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?man "
                alt=""
                class=""
              />{" "}
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?people "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
                Location de Serveur:{" "}
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  Notre service de location de serveurs vous offre des
                  performances fiables et une disponibilité constante. Que vous
                  ayez besoin d'un serveur cloud adaptable ou d'un serveur dédié
                  pour des performances maximales, nous avons la solution
                  idéale. Nous nous occupons de l'infrastructure technique,
                  assurant ainsi que votre site web ou application fonctionne
                  sans problème. Optez pour la simplicité et la tranquillité
                  d'esprit en choisissant notre service de location de serveurs
                  pour propulser votre présence en ligne vers le succès.
                </a>
                <button class="flex mx-auto mt-16 text-white yellowbedev border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </section>
  );
};

export default Offres;
