import React from "react";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <section class="blackbedev glassdark2 whitebedev-text body-font">
      <div class="container px-5 py-24 mx-auto ">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font yellowbedev-text mb-4">
            Contact
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Nous sommes ravis que vous souhaiteriez entrer en contact avec
            nous.N&apos;hesitez pas a nous contacter :{" "}
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full yellowbedev inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 pinkbedev-text mb-5 flex-shrink-0">
              <CiPhone size={50} />
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </div>
            <div class="flex-grow">
              <h2 class="yellowbedev-text text-lg title-font font-medium mb-3">
                Telephone
              </h2>
              <p class="leading-relaxed text-base">03 73 27 53 31</p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 pinkbedev-text mb-5 flex-shrink-0">
              <CiMail size={50} />
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </div>
            <div class="flex-grow">
              <h2 class="yellowbedev-text text-lg title-font font-medium mb-3">
                Mail
              </h2>
              <p class="leading-relaxed text-base">Be-dev@info.com</p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 pinkbedev-text mb-5 flex-shrink-0">
              <CiLocationArrow1 size={50}/>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </div>
            <div class="flex-grow">
              <h2 class="yellowbedev-text text-lg title-font font-medium mb-3">
                Adresse
              </h2>
              <p class="leading-relaxed text-base">
                30 Bd du Chevalier Bayard, 77100 Meaux
              </p>
            </div>
          </div>
        </div>
        <Link to="/contact">
        <button class="flex mx-auto mt-16 text-white yellowbedev border-0 py-2 px-8 focus:outline-none rounded text-lg">
          Nous contacter
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
