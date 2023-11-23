import React from "react";
import SectionContact from "./section";
import Footer from "../../components/layouts/footer";
import Header from "../components/layouts/header";

const Contact = () => {
  return (
    <>
      <Header/>
      <div
          style={{
            backgroundImage:
              ' url("https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_1280.jpg")',
          }}
          class="flex justify-center border rounded-lg p-5 md:p-20 lg:p-44 backgroundImageClass"
        >
          <div className="flex flex-col text-center justify-center items-center max-w-7xl whitebedev-text font-bold ">
            <div className="text-2xl lg:text-3xl font-medium title-font  mx-96 text-black yellowbedev p-6 rounded-md shadow-lg">
              <h1 class="text-xl uppercase">Contact</h1>
              <span class="underline underline-offset-2 blackbedev-text -mt-3">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
              </span>
              <div class="flex flex-col whitebedev-text mt-5">
                <p class="text-xl mt-2 md:mt-4 inline-block px-2">
                  Noms de domaine - Bases de données - Serveurs
                </p>
              </div>
            </div>

            <p className="mt-20 text-sm md:w-[52%] tracking-wide leading-7 blackbedev rounded-md g:text-xl y p-6">
              🚀 Bienvenue sur notre page de contact! Vous avez des interrogations ou des questions?<p className="pt-4"> N'hésitez pas à les exprimer ci-dessous. Nous sommes là pour répondre à vos besoins.🖊️</p> 
            </p>
          </div>
        </div>
      <SectionContact />
      <Footer />
    </>
  );
};
export default Contact;
