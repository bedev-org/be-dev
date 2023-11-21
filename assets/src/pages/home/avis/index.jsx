import React from "react";

const Avis = () => {
  return (
    <section class="blackbedev glass">
      <div class="darkbedev container px-5 py-24  mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                src="images/illustration/avatar.jpg "
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />{" "}
              <p class="leading-relaxed">
                Client chez Be-Dev depuis 5 ans, j'ai rapidement apprécié la
                qualité de leurs services. En peu de temps, j'ai pu diversifier
                ma clientèle, gérant aussi bien des projets avec des petits
                budgets pour des artisans et des associations que des projets
                plus importants avec des clients aux exigences spécifiques.
                Be-Dev reste mon choix exclusif pour l'hébergement, et je le
                recommande vivement à mes clients.
              </p>
              <span class="inline-block h-1 w-10 rounded pinkbedev mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                src="images/illustration/avatar.jpg "
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />{" "}
              <p class="leading-relaxed">
                Maxence réussit comme toujours à résoudre mes problèmes avec
                patience et professionnalisme. Il est une des raisons majeurs
                pour laquelle j'ai l'envie de passer chez Be-Dev. Avoir
                quelqu'un au service client sur qui on peut compter est
                primordial.
              </p>
              <span class="inline-block h-1 w-10 rounded pinkbedev mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                ALPER KAMU
              </h2>
              <p class="text-gray-500">UI Develeoper</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img
                src="images/illustration/avatar.jpg "
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />{" "}
              <p class="leading-relaxed">
                J'ai contacté le service Ionos pour plusieurs informations assez
                techniques concernant mon nom de domaine, la gestion de mes
                adresses mails et de la conservation de mes données.A chaque
                point technique, Maxence, le conseiller a compris très
                rapidement les points à voir, a reformulé avec précision, m'a
                répondu de façon très claire et avec efficacité. Le tout dans
                une écoute et un échange très bienveillant et constructif.
              </p>
              <span class="inline-block h-1 w-10 rounded pinkbedev mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                HENRY LETHAM
              </h2>
              <p class="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default Avis;
