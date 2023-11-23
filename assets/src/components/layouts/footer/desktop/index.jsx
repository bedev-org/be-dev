import React from "react";
import { Link } from "react-router-dom";

const footerDesktop = () => {
  return (
    <>
      <footer class="text-black yellowbedev body-font bottom-0">
        <div class=" py-20 flex flex-row justify-center ">
          <div class="lg:flex flex-row">
            <div class=" w-full ">
              <h2 class="uppercase title-font font-medium text-white tracking-widest text-lg mb-3">
                Contact
              </h2>
              <nav class="list-none mb-10 ">
                <li>
                  <h3 class="text-black hover:text-white hover:transition hover:ease-out whitespace-nowrap text-sm">
                    30 Bd du Chevalier Bayard <br />
                    77100 Meaux, France
                  </h3>
                </li>
                <li>
                  <a href="mailto:contact@be-dev.org" class="text-black hover:text-white hover:transition hover:ease-out  whitespace-nowrap text-sm">
                    contact@be-dev.org
                  </a>
                </li>
                <li>
                  <a href="tel:0384765244" class="text-black hover:text-white hover:transition hover:ease-out text-sm">
                    +33 (0)3 84 76 52 44{" "}
                  </a>
                </li>
              </nav>
            </div>

            <div class=" w-full lg:px-40 ">
              <h2 class="uppercase title-font font-medium text-white tracking-widest text-lg mb-3">
                Menu
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    href="https://be-dev.org"
                    class="text-black hover:text-white hover:transition hover:ease-out text-sm"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <Link
                    to="/services"
                    class="text-black hover:text-white hover:transition hover:ease-out text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profil"
                    class="text-black hover:text-white hover:transition hover:ease-out text-sm"
                  >
                    Profil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    class="text-black hover:text-white hover:transition hover:ease-out text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </nav>
            </div>
            <div class="w-full ">
              <nav class="list-none mb-10">
                <h2 class="uppercase title-font font-medium text-white tracking-widest text-lg mb-3">
                  Rgpd
                </h2>
                <li>
                  <Link
                    to="/mentions-legales"
                    class="text-black hover:text-white hover:transition hover:ease-out text-sm"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/confidentialite"
                    class="text-black hover:text-white hover:transition hover:ease-out  whitespace-nowrap text-sm"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://be-dev.org"
            class="text-lg title-font uppercase font-bold py-4"
          >
            © B E D E V - 2 0 2 4
          </a>
        </div>
      </footer>
    </>
  );
};

export default footerDesktop;
