import React from "react";

const Avis = () => {
  return (
    <section class="blackbedev glass">
      <div class="darkbedev container px-5 py-24  mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                src="images/homme1.jpg "
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <p class="text-justify" >
                Client chez Be-Dev depuis 5 ans, j'ai rapidement apprécié la
                qualité de leurs services. En peu de temps, j'ai pu diversifier
                ma clientèle, gérant aussi bien des projets avec des petits
                budgets pour des artisans et des associations que des projets
                plus importants.
              </p>
              <br />
              <h2 class="yellowbedev-text font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray-500 italic">Senior Product Designer</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 py-4 px-6">
            <div class="h-full text-center">
              <img
                src="images/homme2.jpg "
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <p class="text-justify">
                Maxence réussit comme toujours à résoudre mes problèmes avec
                patience et professionnalisme. Il est une des raisons majeurs
                pour laquelle j'ai l'envie de passer chez Be-Dev. Avoir
                quelqu'un au service client sur qui on peut compter est
                primordial.
              </p>
           <br />
              <h2 class="yellowbedev-text font-medium title-font tracking-wider text-sm">
                ALPER KAMU
              </h2>
              <p class="text-gray-500 italic">UI Develeoper</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img
                src="images/homme3.jpg "
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <p class="text-justify">
                J'ai contacté le service Be-dev concernant mon nom de domaine et de la conservation de mes données. Le conseiller a compris très
                rapidement les points à voir, a reformulé avec précision et m'a
                répondu de façon très claire et avec efficacité. 
              </p>
             <br />
              <h2 class="yellowbedev-text font-medium title-font tracking-wider text-sm">
                HENRY LETHAM
              </h2>
              <p class="text-gray-500 italic">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default Avis;
