import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import TitleServices from "../../components/layouts/title/titleServices";

const sectionContact = () => {
  const initialValues = {
    name: "",
    prenom: "",
    compagny: "",
    number: "",
    email: "",
    message: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // Utilise email.js pour envoyer le formulaire par e-mail
    emailjs
      .send("service_phz6fix", "template_7xto18n", values, "Ff8v4P3PIaWJesfH8")
      .then((response) => {
        console.log("Email sent successfully:", response);
        resetForm();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      {/* <section className=" bg-gray-900 body-font relative text-gray-400 blackbedev grid grid-cols-2">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-full md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end relative ">
            <iframe
              width="100%"
              height="100%"
              title="map"
              class="absolute inset-0"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                  Address
                </h2>
                <p class="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                  Email
                </h2>
                <a class="text-indigo-400 leading-relaxed">be-dev@email.com</a>
                <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  Numero
                </h2>
                <p class="leading-relaxed">01 23 45 67 89</p>
              </div>
            </div>
          </div>
        </div>
        
      </section> */}
      <section class="text-gray-400 bg-gray-900 body-font blackbedev relative pb-20 ">
        <div className="py-4">
          <TitleServices title="Nous contacter" />
          <p className="text-center px-12 text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            asperiores non, aliquid eveniet veritatis omnis, enim atque vero
            voluptatem odit quam.
            <br />
            Libero beatae dolore alias hic rem voluptatum! Asperiores,
            consequuntur!
          </p>
        </div>
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              class="absolute inset-0"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ grayscale: 1, contrast: 1.2 }}
            ></iframe>
            <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                  Address
                </h2>
                <p class="mt-1">30 Boulevard du Chevalier Bayard 77100 Meaux</p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                  Email
                </h2>
                <a class="text-indigo-400 leading-relaxed">
                  contact@be-dev.org
                </a>
                <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  Phone
                </h2>
                <p class="leading-relaxed">01 23 45 67 89</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">
            <div className="blackbedev flex flex-col items-center justify-center">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className="w-1/2">
                  <div className="relative mb-4 ">
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nom"
                    />
                    <ErrorMessage name="name" component="div" />
                  </div>

                  <div className="relative mb-4">
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      type="text"
                      id="prenom"
                      name="prenom"
                      placeholder="Prénom"
                    />
                    <ErrorMessage name="prenom" component="div" />
                  </div>

                  <div className="relative mb-4">
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      type="text"
                      id="compagny"
                      name="compagny"
                      placeholder="Société"
                    />
                    <ErrorMessage name="compagny" component="div" />
                  </div>

                  <div className="relative mb-4">
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Téléphone"
                    />
                    <ErrorMessage name="number" component="div" />
                  </div>

                  <div className="relative mb-4">
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>

                  <div className="relative mb-4">
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Votre message.."
                    />
                    <ErrorMessage name="message" component="div" />
                  </div>
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      class="py-2 px-6 text-white yellowbedev focus:outline-none rounded text-lg hover:transition hover:ease-out hover:text-yellow-300 hover:bg-white"
                    >
                      Envoyer
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default sectionContact;
