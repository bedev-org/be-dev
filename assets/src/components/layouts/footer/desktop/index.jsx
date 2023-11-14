import React from "react";

const footerDesktop = () => {
  return (
    <>
      <footer class="text-black yellowbedev body-font bottom-0">
        <div class=" py-20 flex flex-row justify-center ">
          <div class="lg:flex flex-row">
            <div class=" w-full ">
              <h2 class="title-font font-medium text-black tracking-widest text-sm mb-3">
                Addresse
              </h2>
              <nav class="list-none mb-10  ">
                <li>
                  <a class="text-black hover:text-black whitespace-nowrap ">
                    30 Bd du Chevalier Bayard <br /></a>
                    <a class="text-black hover:text-black ">
                    77100 Meaux, France
                    </a>
                </li>
                <li>
                  <a class="text-black hover:text-black whitespace-nowrap">
                    contact@be-dev.org
                  </a>
                </li>
                <li>
                  <a class="text-black hover:text-black">+33 (0)3 84 76 52 44 </a>
                </li>
              </nav>
            </div>

            <div class=" w-full lg:px-40 ">
              <h2 class="title-font font-medium text-black tracking-widest text-sm mb-3">
                Menu
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="/" class="text-black hover:text-red">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="/services" class="text-black hover:text-black">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/profil" class="text-black hover:text-black">
                    Profil
                  </a>
                </li>
                <li>
                  <a href="/contact" class="text-black hover:text-black">
                    Contact
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full ">
              <nav class="list-none mb-10">
              <h2 class="title-font font-medium text-black tracking-widest text-sm mb-3">
                RGPD
              </h2>
                <li>
                  <a href="/legal-notice" class="text-black ">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="/confidentialite" class="text-black hover:text-black whitespace-nowrap">
                    Politique de confidentialité
                  
                  </a>
                </li>
                <li>
                  <a href="/" class="sm:hidden text-black hover:text-black">
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
