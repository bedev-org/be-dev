import React from "react";
import PriceCard from "../components/layouts/priceCard/chooseCard";
import FavoriteCard from "../components/layouts/priceCard/favoriteCard";
import UltimateCard from "../components/layouts/priceCard/ultimateCard";
import TitleServices from "../components/layouts/title/titleServices";
import Navbar from "../components/layouts/header/index";
import Footer from "../../components/layouts/footer/index";

const Services = () => {
  return (
    <>
      <Navbar />
      <body className="blackbedev">
        <section className="text-white body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20 ">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
                Nos services
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
              </p>
            </div>
            <div className="">
              <TitleServices title="Location noms de domaines" />
              <div className="w-full flex flex-col lg:flex-row justify-around items-center">
                <div className="my-5">
                  <p className="w-[280px] lg:border-r lg:border-white/50 lg:pr-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium ab itaque voluptates amet ullam enim ea magni
                    labore commodi, non reprehenderit neque eos quae numquam
                    dolores repudiandae mollitia voluptate minus!
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
                />
              </div>
            </div>
            <div className="">
              <TitleServices title="Location nom de domaines" />
              <div className=" w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b border-white/20 pb-10">
                <div className="my-5">
                  <p className="w-[280px] lg:border-r lg:border-white/50 lg:pr-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium ab itaque voluptates amet ullam enim ea magni
                    labore commodi, non reprehenderit neque eos quae numquam
                    dolores repudiandae mollitia voluptate minus!
                  </p>
                </div>
                <UltimateCard
                  pack="Pack standard"
                  price="10€"
                  delay="/Mois"
                  option1="option numéro 1"
                  option2="option numéro 2"
                  option3="option numéro 3"
                  option4="option numéro 4"
                  option5="option numéro 5"
                />
                <FavoriteCard
                  pack="Pack medium"
                  price="10€"
                  delay="/Mois"
                  option1="option numéro 1"
                  option2="option numéro 2"
                  option3="option numéro 3"
                  option4="option numéro 4"
                  option5="option numéro 5"
                />
                <UltimateCard
                  pack="Pack premium"
                  price="10€"
                  delay="/Mois"
                  option1="option numéro 1"
                  option2="option numéro 2"
                  option3="option numéro 3"
                  option4="option numéro 4"
                  option5="option numéro 5"
                />
              </div>
            </div>
            <div>
              <TitleServices title="Location nom de domaines" />
              <div className=" w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b border-white/20 pb-10">
                <div className="my-5">
                  <p className="w-[280px] lg:border-r lg:border-white/50 lg:pr-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium ab itaque voluptates amet ullam enim ea magni
                    labore commodi, non reprehenderit neque eos quae numquam
                    dolores repudiandae mollitia voluptate minus!
                  </p>
                </div>
                <UltimateCard
                  pack="Pack standard"
                  price="10€"
                  delay="/Mois"
                  option1="option numéro 1"
                  option2="option numéro 2"
                  option3="option numéro 3"
                  option4="option numéro 4"
                  option5="option numéro 5"
                />
                <FavoriteCard
                  pack="Pack medium"
                  price="10€"
                  delay="/Mois"
                  option1="option numéro 1"
                  option2="option numéro 2"
                  option3="option numéro 3"
                  option4="option numéro 4"
                  option5="option numéro 5"
                />
                <UltimateCard
                  pack="Pack premium"
                  price="10€"
                  delay="/Mois"
                  option1="option numéro 1"
                  option2="option numéro 2"
                  option3="option numéro 3"
                  option4="option numéro 4"
                  option5="option numéro 5"
                />
              </div>
            </div>
          </div>
        </section>
      </body>
      <Footer />
    </>
  );
};

export default Services;