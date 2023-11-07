<<<<<<< HEAD
"use client";
import { HiLink } from "react-icons/hi";
import React from "react";

const FooterMobile = () => {
  return (
    <footer
      className="flex flex-col items-center pb-20 lg:hidden "
      data-aos="fade-right"
    >
      <div className="contain-white arcenciel w-[255px]">
        <div className="py-6 text-sm flex flex-col items-center">
         
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <a
            href="https://www.instagram.com/an.i.me_artist"
            target="_blank"
            rel="noreferrer noopener"
          >
            
          </a>
          <a
            href="https://github.com/chloe775"
            rel="noreferrer noopener"
            target="_blank"
          >
           
          </a>
          <a
            href="https://www.linkedin.com/in/chloe-devise/"
            target="_blank"
            rel="noreferrer noopener"
          >
           
          </a>
          <a
            className="flex items-center"
            href="http://localhost:3000/docs/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <HiLink
              width={20}
              className="text-[rgb(252,206,80)] hover:text-pink-500 text-contour"
            />
          </a>
        </div>
        <div className="flex flex-col uppercase items-center text-xs py-6 text-[#996fbd]">
          <p>Devise Chloé </p>
          <p className="italic">&copy; Copyright - 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
=======
// import React from "react";

// const footerMobile = () => {
//   return (
//     <>
//       <footer class="text-gray-400 bg-zinc-900 body-font">
//         <div class="container px-5 py-20 mx-auto">
//           <div class="flex flex-wrap md:text-left text-center order-first">
//             <div className="lg:w-3/6 ">
//               <form action="" className="">
//               <input
//                   type="text"
//                   class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-300 transition ease-in-out duration-150 md:w-[48%] mr-[2%]"
//                   placeholder="Nom"
//                 />
//                 <input
//                   type="text"
//                   class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
//                   placeholder="Prenom"
//                 />
//                 <input
//                   type="text"
//                   class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition ease-in-out duration-150 md:w-[48%] mr-[2%]"
//                   placeholder="Email"
//                 />
//                 <input
//                   type="text"
//                   class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
//                   placeholder="Numero"
//                 />
//               </form>
//               <textarea
//                 name="message"
//                 class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:ring-1 focus:ring-yellow-500"
//                 placeholder="Message"
//               ></textarea>
//               <div className="flex flex-row justify-center">
//                 <button
//                   type="submit"
//                   class="bg-gradient-to-r from-balck-700 to-dark text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-yellow-300 hover:text-black hover:to-black transition ease-in-out duration-150 "
//                 >
//                   Envoyer
//                 </button>
//               </div>
//             </div>
//             <div class="lg:w-1/4 md:w-1/2 w-full lg:px-40 py-10">
//               <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
//                 Menu
//               </h2>
//               <nav class="list-none mb-10">
//                 <li>
//                   <a class="text-gray-400 hover:text-red">Accueil</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-400 hover:text-white">Services</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-400 hover:text-white">Packs</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-400 hover:text-white">Contact</a>
//                 </li>
//               </nav>
//             </div>
//             <div class="lg:w-1/4 md:w-1/2 w-full px-4 py-10">
//               <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
//                 Packs
//               </h2>
//               <nav class="list-none mb-10">
//                 <li>
//                   <a class="text-gray-400 hover:text-white">Pack Free</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-400 hover:text-white">Pack Start</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-400 hover:text-white">Pack Pro</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-400 hover:text-white">Pack Expert</a>
//                 </li>
//               </nav>
//             </div>
//           </div>

//           <div class="bg-yellow-300 bg-opacity-75">
//             <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col font-extrabold text-white text-center">
//               B E D E V
//               <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//                 <a class="text-white">
//                   <svg
//                     fill="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     class="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                   </svg>
//                 </a>
//                 <a class="ml-3 text-white">
//                   <svg
//                     fill="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     class="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                   </svg>
//                 </a>
//                 <a class="ml-3 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     class="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <rect
//                       width="20"
//                       height="20"
//                       x="2"
//                       y="2"
//                       rx="5"
//                       ry="5"
//                     ></rect>
//                     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                   </svg>
//                 </a>
//                 <a class="ml-3 text-white">
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="0"
//                     class="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="none"
//                       d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
//                     ></path>
//                     <circle cx="4" cy="4" r="2" stroke="none"></circle>
//                   </svg>
//                 </a>
//               </span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default footerMobile;
import React from "react";

const footerDesktop = () => {
  return (
    <>
      <footer class="sm:hidden text-gray-400 bg-zinc-900 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Menu
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-red">Accueil</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Services</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Pack</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Contact</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Packs
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Pack Free</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Pack Start</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Pack Pro</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Pack Expert</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-2/4">
              <form action="" className="">
                <input
                  type="text"
                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-300 transition ease-in-out duration-150 md:w-[48%] mr-[2%]"
                  placeholder="Nom"
                />
                <input
                  type="text"
                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                  placeholder="Prenom"
                />
                <input
                  type="text"
                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition ease-in-out duration-150 md:w-[48%] mr-[2%]"
                  placeholder="Email"
                />
                <input
                  type="text"
                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:yellow-teal-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                  placeholder="Numero"
                />
              </form>
              <textarea
                name="message"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                placeholder="Message"
              ></textarea>
              <div className="flex flex-row justify-center pb-6">
                <button
                  type="submit"
                  class=" font-bold py-2 px-4 rounded-md mt-4 hover:bg-yellow-300 hover:text-white hover:to-blue-300 transition ease-in-out duration-150 "
                >
                  Envoyer
                </button>
              </div>
            </div>
          </div>

          <div class="bg-yellow-300 bg-opacity-75">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col font-extrabold text-white text-center">
              © B E D E V - 2 0 2 4
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
>>>>>>> 0eccdb64ead4210efd08a3d0817cc39826631783
