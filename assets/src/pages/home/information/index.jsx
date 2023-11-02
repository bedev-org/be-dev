import React from "react";

const Information = () => {
  return (
    <section class="blackbedev ">
      <div class="flex justify-center items-center glasswhite">
        <div class="flex flex-col justify-center items-center max-w-7xl ">
          <h1 class="text-3xl md:text-[50px] text-gray-700 font-bold mt-5 ">
            Information
          </h1>
          <div class="flex flex-col justify-center items-center xl:flex-row m-8 w-[80%] lg:w-full">
            <div class="flex flex-col items-center justify-center m-6 px-6 lg:w-1/3 w-full ">
              <h1 class="text-gray-700 text-2xl font-bold">Service</h1>
              <div class="flex items-center justify-center flex-col space-y-2 mt-5 ">
                <div class="flex items-center justify-center space-x-4">
                  <img
                    src="images/illustration/offre-standard.jpg "
                    alt=""
                    class="w-[20%] md:w-[5%]"
                  />{" "}
                  <h1 class="text-lg font-semibold mt-3">Web Development</h1>
                </div>
                <h1 class="text-justify text-gray-700 md:w-[250px]">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </h1>
              </div>
              <div class="flex items-center justify-center flex-col space-y-2 mt-5">
                <div class="flex items-center justify-center space-x-4">
                  <img
                    src="images/illustration/offre-standard.jpg "
                    alt=""
                    class="w-[20%] md:w-[5%]"
                  />{" "}
                  <h1 class="text-lg font-semibold mt-2">UI/UX Design</h1>
                </div>
                <h1 class="text-justify text-gray-700 md:w-[250px]">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </h1>
              </div>
              <div class="flex items-center justify-center flex-col space-y-2 mt-3">
                <div class="flex items-center justify-center space-x-4">
                  <img
                    src="images/illustration/offre-standard.jpg "
                    alt=""
                    class="w-[20%] md:w-[5%]"
                  />{" "}
                  <h1 class="text-lg font-semibold mt-5">Web Consulting</h1>
                </div>
                <h1 class="text-justify text-gray-700 md:w-[250px]">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </h1>
              </div>
            </div>
            <div class="w-60 lg:w-96 h-60 lg:h-96 overflow-hidden  ">
              <img
                src="images/illustration/offre-standard.jpg "
                alt=""
                class="h-full w-full"
              />{" "}
            </div>
            <div class="flex flex-col m-6 px-6 xl:w-1/3 w-full items-center justify-center">
              <div class="flex flex-col items-start">
                <h1 class="text-gray-700 text-2xl font-bold">
                  Web specialist based in Jakarta
                </h1>
                <p class="text-justify text-gray-700 md:w-[250px] mt-5">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </p>
                <p class="text-justify text-gray-700 md:w-[250px] mt-5">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </p>
                <button class="mt-5 px-6 py-1 text-lg text-white hover:bg-gray-800 bg-gray-700">
                  Hire me
                </button>
              </div>
              <div class="flex space-x-6 mt-5">
                <div class="flex flex-col ">
                  <div class="flex space-x-1">
                    <h1 class="text-2xl font-semibold mt-3">13</h1>
                    <h1 class="text-xl mt-[14px] font-semibold ">Years</h1>
                  </div>
                  <h1 class=" text-gray-700 ">Experience</h1>
                </div>
                <div class="flex flex-col ">
                  <div class="flex space-x-1">
                    <h1 class="text-2xl font-semibold mt-3">256</h1>
                    <h1 class="text-xl font-bold mt-3">+</h1>
                  </div>
                  <h1 class=" text-gray-700 ">Clients</h1>
                </div>
                <div class="flex flex-col ">
                  <div class="flex space-x-1">
                    <h1 class="text-2xl font-semibold mt-3">99.8</h1>
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
