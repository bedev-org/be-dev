import React from "react";

const footerDesktop = () => {
  return (
    <>
      <footer class="text-black yellowbedev body-font bottom-0">
        <div class=" py-20 flex flex-row justify-center ">
          <div class="lg:flex flex-row">
            <div class=" w-full ">
              <h2 class="uppercase title-font font-medium text-black tracking-widest text-sm mb-3">
                Contact
              </h2>
              <nav class="list-none mb-10  ">
                <li>
                  <a class="text-black hover:text-white hover:transition hover:ease-out whitespace-nowrap ">
                    30 Bd du Chevalier Bayard <br />
                    77100 Meaux, France
                  </a>
                </li>
                <li>
                  <a class="text-black hover:text-white hover:transition hover:ease-out  whitespace-nowrap">
                    contact@be-dev.org
                  </a>
                </li>
                <li>
                  <a class="text-black hover:text-white hover:transition hover:ease-out ">
                    +33 (0)3 84 76 52 44{" "}
                  </a>
                </li>
              </nav>
            </div>

            <div class=" w-full lg:px-40 ">
              <h2 class="uppercase title-font font-medium text-black tracking-widest text-sm mb-3">
                Menu
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    href="/"
                    class="text-black hover:text-white hover:transition hover:ease-out "
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    class="text-black hover:text-white hover:transition hover:ease-out "
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/profil"
                    class="text-black hover:text-white hover:transition hover:ease-out "
                  >
                    Profil
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    class="text-black hover:text-white hover:transition hover:ease-out "
                  >
                    Contact
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full ">
              <nav class="list-none mb-10">
                <h2 class="uppercase title-font font-medium text-black tracking-widest text-sm mb-3">
                  Rgpd
                </h2>
                <li>
                  <a
                    href="/legal-notice"
                    class="text-black hover:text-white hover:transition hover:ease-out "
                  >
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a
                    href="/confidentialite"
                    class="text-black hover:text-white hover:transition hover:ease-out  whitespace-nowrap "
                  >
                    Politique de confidentialité
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://be-dev.org"
            class="title-font uppercase font-bold py-4"
          >
            © B E D E V - 2 0 2 4
          </a>
        </div>
      </footer>
    </>
  );
};

export default footerDesktop;
