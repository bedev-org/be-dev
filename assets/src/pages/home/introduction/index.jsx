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
          class="flex justify-center border rounded-lg p-5 md:p-20 lg:p-44 backgroundImageClass"
        >
          <div className="flex flex-col text-center justify-center items-center max-w-7xl whitebedev-text font-bold ">
            <div className="text-2xl lg:text-3xl font-medium title-font  mx-96 text-black yellowbedev p-6 rounded-md shadow-lg">
              <h1 class="text-xl uppercase">Accueil</h1>
              <span class="underline underline-offset-2 blackbedev-text -mt-3">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
              </span>
              <div class="flex flex-col whitebedev-text mt-5">
                <p class="text-xl mt-2 md:mt-4 inline-block px-2">
                  Noms de domaine - Bases de données - Serveurs
                </p>
              </div>
            </div>

            <p className="mt-20 text-sm md:w-[52%] tracking-wide leading-7 blackbedev rounded-md g:text-xl y p-6">
              🚀Bienvenue sur be-dev ! <p className="pt-4">Explorez notre site et n'hésitez pas à nous contacter si vous avez besoin de services pour un nom de domaine, location de serveurs, ou gestion de bases de données.</p> <p className="pt-4"> Nous sommes là pour répondre à vos besoins.😊</p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
