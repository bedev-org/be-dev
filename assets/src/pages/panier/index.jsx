import React, { useEffect, useState } from "react";
import Navbar from "../components/layouts/header";
import Footer from "../../components/layouts/footer";
import { RiDeleteBinFill } from "react-icons/ri";
import Cart from "./functions/cart";

const Panier = () => {
  useEffect(() => {
    const domain = JSON.parse(localStorage.getItem("domain") || "[]");
    const server = JSON.parse(localStorage.getItem("server") || "[]");
    const database = JSON.parse(localStorage.getItem("database") || "[]");

    const totalCart =
      (domain.price ?? +0) + (server.price ?? +0) + (database.price ?? +0);

    window.localStorage.setItem("cart", JSON.stringify({ total: totalCart }));
  }, []);

  return (
    <section>
      <Navbar />
      <Cart />
      <div className="bg-gray-800 grid grid-rows-1 justfy-items-center">
        <div className="bg-gray-900 mx-28 lg:mx-60 mt-10">
          <div className="border-b border-white">
            <h1 className="text-orange-600 text-4xl py-4">Votre panier</h1>
          </div>
          <div className="text-white border-b border-white grid grid-cols-2 ">
            <div className="flex align-middle">
              <div>
                <img
                  src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
              <div className=" ml-4 flex align-middle">
                <div>
                  <div className="text-4xl  lg:text-2xl my-4">
                    <a href="http://127.0.0.1:8000/services">
                      <p>produit</p>
                    </a>
                  </div>
                  <div className="text-sm lg:text-l my-4">
                    <p>
                      <p>0,00$</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end text-lg my-4 mr-8">
              <button>
                <RiDeleteBinFill />
              </button>
            </div>
          </div>{" "}
          <div className="text-white border-b border-white grid grid-cols-2 ">
            <div className="flex align-middle">
              <div>
                <img
                  src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
              <div className=" ml-4 flex align-middle">
                <div>
                  <div className="text-4xl  lg:text-2xl my-4">
                    <a href="http://127.0.0.1:8000/services">
                      <p>produit</p>
                    </a>
                  </div>
                  <div className="text-sm lg:text-l my-4">
                    <p>
                      <p>0,00$</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end text-lg my-4 mr-8">
              <button>
                <RiDeleteBinFill />
              </button>
            </div>
          </div>{" "}
          <div className="text-white border-b border-white grid grid-cols-2 ">
            <div className="flex align-middle">
              <div>
                <img
                  src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
              <div className=" ml-4 flex align-middle">
                <div>
                  <div className="text-4xl  lg:text-2xl my-4">
                    <a href="">
                      <p>produit</p>
                    </a>
                  </div>
                  <div className="text-sm lg:text-l my-4">
                    <p>
                      <p>0,00$</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end text-lg my-4 mr-8">
              <button>
                <RiDeleteBinFill />
              </button>
            </div>
          </div>{" "}
          <div className="text-white border-b border-white grid grid-cols-2 ">
            <div className="flex align-middle">
              <div>
                <img
                  src="/images/logos/cc2a61939245405fb2171617035ec283_5.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
              <div className=" ml-4 flex align-middle">
                <div>
                  <div className="text-4xl  lg:text-2xl my-4">
                    <a href="">
                      <p>produit</p>
                    </a>
                  </div>
                  <div className="text-sm lg:text-l my-4">
                    <p>
                      <p>0,00$</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end text-lg my-4 mr-8">
              <button>
                <RiDeleteBinFill />
              </button>
            </div>
          </div>{" "}
          <div className="border-t border-white grid grid-rows-2  py-4">
            <div className="flex align-items text-2xl lg:text-xl">
              <h1 className="text-white uppercase ">tva(20%) : </h1>
              <p className="text-gray-400 ml-4"> 0,00$</p>
            </div>
            <div className="flex align-items text-4xl lg:text-2xl">
              <h1 className="text-white ">Prix total : </h1>
              <p className="text-gray-400 ml-1"> 0,00$</p>
            </div>
          </div>
        </div>
        <div className="grid justify-items-end py-20 mx-30 lg:mx-60">
          <button className="bg-yellow-200 hover:bg-yellow-300 w-40 h-10 text-xl">
            continuer
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Panier;
