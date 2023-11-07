import React from "react";

const footerDesktop = () => {
  return (
    <>
      <footer class="text-gray-400 bg-zinc-900 body-font bottom-0">
        <div class=" px-5 py-20 flex flex-row justify-center ">
          <div class="lg:flex flex-row">
            <div class=" w-full ">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Address
              </h2>
              <nav class="list-none mb-10  ">
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

            <div class=" w-full lg:px-40 ">
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
            <div class="w-full ">
              <nav class="list-none mb-10">
                <li>
                  <a href="/" class="text-gray-400 ">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="/" class="text-gray-400 hover:text-white">
                    politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="/" class="sm:hidden text-gray-400 hover:text-white">
                    © B E D E V - 2 0 2 4
                  </a>
                </li>
              </nav>
            </div>
          <div className="lg:hidden text-center">
            <h1 class="yellowbedev-text text-xl font-bold ">
              B E<span class="text-white">D E V</span>
            </h1>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footerDesktop;
