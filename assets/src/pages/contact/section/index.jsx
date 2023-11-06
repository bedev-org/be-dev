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
    <section className="text-gray-400 blackbedev body-font relative flex flex-col items-center justify-center">
      <h1 class="yellowbedev-text text-4xl font-bold px-52 pt-20">
        Co<span class="text-white">ntact</span>
      </h1>
      <div className="blackbedev flex flex-col items-center justify-center h-[50rem] w-[40rem] ">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div className="relative mb-4 ">
              <label htmlFor="name">Nom</label>
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
              <label htmlFor="prenom">Prénom</label>
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
              <label htmlFor="compagny">Compagnie</label>
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
              <label htmlFor="number">Numéro</label>
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
              <label htmlFor="email">Email</label>
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
                placeholder="Message"
              />
              <ErrorMessage name="message" component="div" />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white py-2 px-6 focus:outline-none  hover:bg-yellow-300 rounded text-lg border-[1px] "
              >
                Button
              </button>
            </div>

            <p className="text-xs text-gray-400 text-opacity-90 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default sectionContact;
