
import React, { useEffect } from "react";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";

const onSubmit = (values) => {
  const formElement = document.getElementById("contact-form");
  emailjs
    .sendForm("emaime services service ID", "ton template email templates", formElement)
    .then(function (response) {
      console.log("SUCCESS!", response);
      alert("formulaire envoyé");
    })
    .catch(function (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      alert("Une erreur s'est produite lors de l'envoi du formulaire.");
    });
};

const Form = () => (
  useEffect(() => {
    emailjs.init("ta clef publique email JS dans acount");
  }, []),
  (
    <div>
      <Formik
        initialValues={{ name: "", prenom: "", email: "", numero: "",message:"" }} 
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            id="contact-form"
            className="contain my-12 font-assistantRegular flex flex-col mx-8 px-3 pt-6  md:mx-16 lg:my-0 lg:grid lg:grid-cols-2 lg:mx-96 lg:mb-20 hover:scale-100 hover:ease-in-out hover:duration-200 lg:hover:scale-105 "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center lg:ml-12 ">
              <label htmlFor="">Votre nom</label>
              <Input
                type="text"
                name="name"
                id="name"
                className="w-3/4 dark:hover:bg-cyan-950"
              />
            </div>

            <div className="flex flex-col items-center py-4 lg:pt-0 lg:mr-12">
              <label htmlFor="">Votre prénom</label>
              <Input
                type="text"
                name="surname"
                id="surname"
                className="w-3/4 dark:hover:bg-cyan-950"
              />
            </div>
            <div className="flex flex-col items-center py-4 lg:pt-0 lg:mr-12">
              <label htmlFor="">Compagny</label>
              <Input
                type="text"
                name="surname"
                id="surname"
                className="w-3/4 dark:hover:bg-cyan-950"
              />
            </div>
            <div className="flex flex-col items-center lg:pt-4 lg:ml-12">
              <label htmlFor="">Votre Téléphone</label>
              <Input
                type="text"
                name="phone"
                id="phone"
                className="w-3/4 dark:hover:bg-cyan-950"
              />
            </div>
            <div className="flex flex-col items-center py-4 lg:mr-12">
              Votre adresse email
              <Input
                className="w-3/4  dark:hover:bg-cyan-950"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            {errors.email && touched.email && errors.email}

            <div className="mx-8  flex flex-col items-center  lg:justify-center lg:col-span-2 lg:py-4 lg:mx-2">
              <label htmlFor="">Objet du message</label>

              <textarea
                name="message"
                id="message"
                className="h-40 px-3 md:w-9/12 lg:w-10/12   lg:h-72 rounded-lg bg-cyan-800 hover:bg-white text-black border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 hover:transition hover:ease-in-out hover:duration-200 dark:hover:bg-cyan-950"
              ></textarea>
            </div>
            <div className="flex flex-row justify-center py-8 lg:col-span-2 lg:py-8 lg:pb-10">
              <button
                type="submit"
                disabled={isSubmitting}
                value="Envoyer"
                className="uppercase px-4 py-4 w-36"
                onClick={() => onSubmit() }
              ></button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
  );

export default Form;