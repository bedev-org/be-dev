import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage:
              ' url("https://lafibre.info/images/datacenter/201305_datacenter_google_LNR_003.jpg")',
          }}
          class="flex justify-center border rounded-lg p-5 md:p-20 lg:p-36 backgroundImageClass"
        >
          <div class="flex flex-col text-center justify-center items-center max-w-7xl whitebedev-text font-bold ">
            <div className="text-2xl lg:text-3xl font-medium title-font  mx-96 text-black bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-md shadow-lg">
            <h1 class="text-base font-medium  ">Bienvenue chez Be-dev</h1>
            <span class="underline underline-offset-2 blackbedev-text -mt-3">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </span>
            <div class="flex flex-col whitebedev-text mt-5">
              <h1 class="text-4xl md:text-[50px] font-semibold">Be-dev.org</h1>
              <p class="text-xl mt-2 md:mt-4 inline-block px-2">
                Noms de domaine - Bases de données - Serveurs
              </p>
              </div>
            </div>
            <p class="mt-20 text-sm md:w-[52%] tracking-wide leading-7 blackbedev rounded-md g:text-xl  p-6">
              Dans l'ère numérique en constante évolution, les données sont le
              moteur qui alimente l'innovation et la croissance des entreprises.
              Chez Be-dev, nous comprenons l'importance cruciale d'une gestion
              efficace et sécurisée des données pour garantir le succès de votre
              entreprise en ligne.<br/>
               Spécialisés dans l'hébergement de bases de
              données, nous sommes fiers de nous présenter comme votre
              partenaire de confiance dans ce monde complexe et en constante
              mutation de la technologie.
            </p>
            <div class="flex mt-20 space-x-5">
              <Link to="/services">
              <button class="whitebedev yellowbedev-text px-6 py-2 font-semibold">
                Read More
              </button>
              </Link>
              <Link to="/contact">
              <button class="yellowbedev text-white px-6 py-2 font-semibold">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          src="https://kit.fontawesome.com/290d4f0eb4.js"
          crossorigin="anonymous"
        ></script>
      </section>
    </>
  );
};

export default Introduction;
