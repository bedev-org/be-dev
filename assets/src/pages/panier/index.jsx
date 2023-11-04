import React, { useEffect } from "react";
import Navbar from "../components/layouts/header";
import Footer from "../../components/layouts/footer";

const Panier = () => {
  return (
    <section>
      <Navbar />
      <div className="bg-gray-800 grid grid-rows-1 justfy-items-center">
        <div className="bg-gray-900 mx-20 lg:mx-40 mt-10">
          <div className="border-b border-white">
            <h1 className="text-orange-600 text-4xl py-4">Votre panier</h1>
          </div>
          <div className="text-white flex align-items border-b border-white">
            <div>
              <img
                src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                alt=""
              />
            </div>
            <div>
              <div className="text-4xl  lg:text-2xl mt-5">
                <a href="">
                  <p>produit</p>
                </a>
              </div>
              <div className="text-xl lg:text-l my-5">
                <p>
                  <p>0,00$</p>
                </p>
              </div>
              <div className=" text-lg mb-5">
                <button>supprimer</button>
              </div>
            </div>
          </div>{" "}<div className="text-white flex align-items border-b border-white">
            <div>
              <img
                src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                alt=""
              />
            </div>
            <div>
              <div className="text-4xl  lg:text-2xl mt-5">
                <a href="">
                  <p>produit</p>
                </a>
              </div>
              <div className="text-xl lg:text-l my-5">
                <p>
                  <p>0,00$</p>
                </p>
              </div>
              <div className=" text-lg mb-5">
                <button>supprimer</button>
              </div>
            </div>
          </div>{" "}<div className="text-white flex align-items border-b border-white">
            <div>
              <img
                src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                alt=""
              />
            </div>
            <div>
              <div className="text-4xl  lg:text-2xl mt-5">
                <a href="">
                  <p>produit</p>
                </a>
              </div>
              <div className="text-xl lg:text-l my-5">
                <p>
                  <p>0,00$</p>
                </p>
              </div>
              <div className=" text-lg mb-5">
                <button>supprimer</button>
              </div>
            </div>
          </div>{" "}
          <div className="border-t border-white flex align-items text-4xl lg:text-2xl py-4">
            <h1 className="text-white">Prix total : </h1>
            <p className="text-gray-400 ">0,00$</p>
          </div>
        </div>
        <div className="grid justify-items-end py-20 mx-20 lg:mx-40">
          <button className="bg-yellow-200 hover:bg-yellow-300 w-40 h-10">
            continuer
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Panier;
