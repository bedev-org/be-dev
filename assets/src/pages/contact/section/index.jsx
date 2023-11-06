import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";

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
      <section className=" bg-gray-900 body-font relative text-gray-400 blackbedev grid grid-cols-2">
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
        <div >
          <div className="text-gray-400 blackbedev body-font relative flex flex-col items-center justify-center">
            <h1 class="yellowbedev-text text-4xl font-bold px-52 pt-20">
              Co<span class="text-white">ntact</span>
            </h1>
            <div className="blackbedev flex flex-col items-center justify-center h-[60rem] w-[50rem] ">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
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
                      placeholder="Compagnie"
                    />
                    <ErrorMessage name="compagny" component="div" />
                  </div>

                  <div className="relative mb-4">
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Numéro"
                    />
                    <ErrorMessage name="number" component="div" />
                  </div>

                  <div className="relative mb-4">
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>

                  <div className="relative mb-4">
                    <label htmlFor="message">Message</label>
                    <Field
                      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-300 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="ecriver ici.."
                    />
                    <ErrorMessage name="message" component="div" />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="text-white py-2 px-6 focus:outline-none  hover:bg-yellow-300 rounded text-lg border-[1px] "
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
