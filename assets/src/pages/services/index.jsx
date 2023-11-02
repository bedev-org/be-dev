import React from "react";
import PriceCard from "../components/layouts/priceCard/chooseCard";
import FavoriteCard from "../components/layouts/priceCard/favoriteCard";
import UltimateCard from "../components/layouts/priceCard/ultimateCard";
import TitleServices from "../components/layouts/title/titleServices";
import NavbarDesktop from "./desktop";

const Services = () => {
  return (
    <body className="blackbedev">
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 ">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Nos services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
          </div>
          <div>
            <TitleServices title="Location nom de domaines" />
            <div className="w-full flex justify-center items-center">
              <PriceCard
                pack="Nom de domaine"
                price="10€"
                delay="/An"
                option1="option numero 1"
                option2="option numero 2"
                option3="option numero 3"
                option4="option numero 4"
              />
            </div>
          </div>
          <div className="">
            <TitleServices title="Location nom de domaines" />

            <div className=" w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b border-white/20 pb-10">
              <UltimateCard
                pack="Pack standard"
                price="10€"
                delay="/Mois"
                option1="option numero 1"
                option2="option numero 2"
                option3="option numero 3"
                option4="option numero 4"
                option5="option numero 5"
              />
              <FavoriteCard
                pack="Pack medium"
                price="10€"
                delay="/Mois"
                option1="option numero 1"
                option2="option numero 2"
                option3="option numero 3"
                option4="option numero 4"
              />
              <UltimateCard
                pack="Pack premium"
                price="10€"
                delay="/Mois"
                option1="option numero 1"
                option2="option numero 2"
                option3="option numero 3"
                option4="option numero 4"
                option5="option numero 5"
              />
            </div>
          </div>
          <div>
            <TitleServices title="Location nom de domaines" />

            <div className=" w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b border-white/20 pb-10">
              <UltimateCard
                pack="Pack standard"
                price="10€"
                delay="/Mois"
                option1="option numero 1"
                option2="option numero 2"
                option3="option numero 3"
                option4="option numero 4"
                option5="option numero 5"
              />
              <FavoriteCard
                pack="Pack medium"
                price="10€"
                delay="/Mois"
                option1="option numero 1"
                option2="option numero 2"
                option3="option numero 3"
                option4="option numero 4"
              />
              <UltimateCard
                pack="Pack premium"
                price="10€"
                delay="/Mois"
                option1="option numero 1"
                option2="option numero 2"
                option3="option numero 3"
                option4="option numero 4"
                option5="option numero 5"
              />
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};
export default Services;
