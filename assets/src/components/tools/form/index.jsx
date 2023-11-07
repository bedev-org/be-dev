import React from "react";
import { useFormik } from 'formik';
import { Formik } from 'formik';

const Form = () => {
  const SubmitForm = () => {
    alert("formulaire envoyé");
  };

  return (
    <form className="flex flex-col blur-10" action="" method="POST">
      <div class="flex flex-col items-center justify-center">
        <div class="w-full max-w-md  rounded-lg shadow-md p-6">

          <form class="flex flex-wrap">
            <input
              type="text"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
              placeholder="Nom / Prénom"
            />
            <input
              type="email"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-teal-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
              placeholder="Email"
            />
            <input
              type="text"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-teal-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
              placeholder="Ville"
            />
            <input
              type="text"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-teal-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
              placeholder="Code postal"
            />
            <input
              type="text"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-teal-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
              placeholder="Portable"
            />
            <input
              type="date"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-teal-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
              placeholder="Date of Birth"
            />
            <textarea
              name="message"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
              placeholder="Message"
            ></textarea>
          </form>
        </div>
        <button
          type="submit"
          class="bg-gradient-to-r from-teal-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 hover:to-teal-600 transition ease-in-out duration-150"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};
export default Form;
