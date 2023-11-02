import React from "react";
import Footer from "../../components/layouts/footer";
import Navbar from "../components/layouts/header";

const Dashboard = () => {
  return (
    <section class="whitebedev-text body-font blackbedev">
      <Navbar />

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            src="https://source.unsplash.com/random/500x400/?man "
            alt=""
            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
          />{" "}
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p class="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="whitebedev-text body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font yellowbedev-text">
                  Serveur
                </span>
                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium yellowbedev-text title-font mb-2">
                  Bitters hashtag waistcoat fashion axe chia unicorn
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font yellowbedev-text">
                  Nom de domaine
                </span>
                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium yellowbedev-text title-font mb-2">
                  Meditation bushwick direct trade taxidermy shaman
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font yellowbedev-text">
                  Base de donné
                </span>
                <span class="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium yellowbedev-text title-font mb-2">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Dashboard;
