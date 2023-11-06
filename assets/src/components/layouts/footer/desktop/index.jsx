import React from "react";

const footerDesktop = () => {
  return (
    <>
      <footer class="text-gray-400 bg-zinc-900 body-font bottom-0">
        <div class=" px-5 py-20 mx-auto">
          <div class="flex flex-row justify-center md:text-left sm:flex">
            <div class="lg:w-1/3  md:w-1/2 w-full sm:px-6  ">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3 text-center">
                Address
              </h2>
              <nav class="list-none mb-10 text-center ">
                <li>
                  <a class="text-gray-400 hover:text-white">
                    30 Bd du Chevalier Bayard <br />
                    77100 Meaux, France
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    contact@grumiaux-portfolio.fr
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">06 56 71 62 84 </a>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/3 md:w-1/2 w-full px-40 items-center ">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Menu
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="/" class="text-gray-400 hover:text-red">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="/services" class="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/profil" class="text-gray-400 hover:text-white">
                    Profil
                  </a>
                </li>
                <li>
                  <a href="/contact" class="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </nav>
            </div>
          </div>

          <div class="yellowbedev bg-opacity-75">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col font-extrabold text-white text-center">
              © B E D E V - 2 0 2 4
              <div className="pl-96">
                <a href="/" className="hover:text-black">
                  Mentions légales
                </a>
                <a href="/" className="hover:text-black p-28">
                  politique de confidentialité
                </a>
              </div>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-white">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-white">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footerDesktop;
