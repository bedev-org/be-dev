import React from "react";

const Introduction = () => {
  return (
    <>
      <section className="pt-40 pb-40 blackbedev">
        <div class="flex justify-center  p-5 md:p-16 lg:p-28 ">
          <div class="flex flex-col text-center justify-center items-center max-w-7xl  text-white">
            <h1 class="text-base font-medium tracking-wider ">
              Bienvenue chez Be-dev
            </h1>
            <span class="underline underline-offset-2 text-white -mt-3">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </span>
            <div class="flex flex-col text-white mt-5">
              <h1 class="text-4xl md:text-[50px] font-semibold">Be-dev.org</h1>
              <p class="text-xl mt-2 md:mt-4 tracking-wide">
                Noms de domaine - Bases de données - Serveurs
              </p>
            </div>
            <p class="mt-4 text-sm md:w-[52%] tracking-wide leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              libero laborum eveniet rerum repudiandae temporibus deleniti
              necessitatibus quia iste, quas, hic illum et beatae! Neque aut
              autem fuga quibusdam vel?
            </p>
            <div class="flex mt-10 space-x-5">
              <button class="whitebedev yellowbedev-text px-6 py-2 font-semibold">
                Read More
              </button>
              <button class="yellowbedev text-white px-6 py-2 font-semibold">
                Contact Us
              </button>
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
